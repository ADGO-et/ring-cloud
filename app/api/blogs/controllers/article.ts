import { NextRequest, NextResponse } from "next/server";
import { RowDataPacket, ResultSetHeader } from "mysql2/promise";
import { Blog, Content } from "@/interfaces/Blog";
import { blogSchema, blogUpdateSchema } from "../schema";

import { pool, query } from "@/utils/db";

interface Props {
  params: {
    id: string;
  };
}

export const getLatestBlogs = async (
  request: NextRequest
): Promise<NextResponse> => {
  try {
    const blogs = await query<RowDataPacket[]>(
      `
      SELECT 
        b.id, b.title, b.thumbnail, b.thumbnailPublicId, b.description, b.category, b.createdAt, b.updatedAt,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            'id', bc.id,
            'type', bc.type,
            'value', bc.value,
            'createdAt', bc.createdAt,
            'updatedAt', bc.updatedAt
          )
        ) AS blogcontent
      FROM article b
      LEFT JOIN blogcontent bc ON b.id = bc.blogId
      GROUP BY b.id
      ORDER BY b.createdAt DESC
      `
    );

    blogs.forEach((blog) => {
      blog.content = blog.content ? JSON.parse(blog.content) : [];
    });

    return NextResponse.json({ success: true, blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error,
        error: "Something unexpected happened.",
      },
      { status: 500 }
    );
  }
};

export const getBlogs = async (): Promise<any> => {
  try {
    const blogs = await query<RowDataPacket[]>(
      `SELECT 
        b.id, b.title, b.thumbnail, b.thumbnailPublicId, b.description, b.category, b.createdAt, b.updatedAt,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            'id', bc.id,
            'type', bc.type,
            'value', bc.value,
            'createdAt', bc.createdAt,
            'updatedAt', bc.updatedAt
          )
        ) AS blogcontent
      FROM blog b
      LEFT JOIN blogcontent bc ON b.id = bc.blogId
      GROUP BY b.id`
    );
    blogs.forEach((blog) => {
      blog.content = blog.content ? JSON.parse(blog.content) : [];
    });

    return new Response(JSON.stringify({ success: true, blogs }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Something unexpected occurred.",
        error: error,
      }),
      { status: 500 }
    );
  }
};

export const fetchBlogsFromController = async (): Promise<{
  success: boolean;
  blogs: any[];
}> => {
  try {
    const blogs = await query<RowDataPacket[]>(
      `SELECT 
        b.id, b.title, b.thumbnail, b.thumbnailPublicId, b.description, b.category, b.createdAt, b.updatedAt,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            'id', bc.id,
            'type', bc.type,
            'value', bc.value,
            'createdAt', bc.createdAt,
            'updatedAt', bc.updatedAt
          )
        ) AS blogcontent
      FROM blog b
      LEFT JOIN blogcontent bc ON b.id = bc.blogId
      GROUP BY b.id
      ORDER BY b.createdAt DESC`
    );

    blogs.forEach((blog) => {
      blog.content = blog.content ? JSON.parse(blog.content) : [];
    });

    return { success: true, blogs };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { success: false, blogs: [] };
  }
};

export const getBlog = async (
  request: NextRequest, // Added request parameter here.
  { params }: { params: { id: string } }
): Promise<Response> => {
  try {
    const blogs = await query<RowDataPacket[]>(
      `SELECT 
        b.id, b.title, b.thumbnail, b.thumbnailPublicId, b.description, b.category, b.createdAt, b.updatedAt,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            'id', bc.id,
            'type', bc.type,
            'value', bc.value,
            'createdAt', bc.createdAt,
            'updatedAt', bc.updatedAt
          )
        ) AS blogcontent
      FROM blog b
      LEFT JOIN blogcontent bc ON b.id = bc.blogId
      WHERE b.id = ?
      GROUP BY b.id`,
      [parseInt(params.id)]
    );

    if (blogs.length === 0) {
      return new Response(
        JSON.stringify({
          success: false,
          error: `Blog with id: '${params.id}' not found`,
        }),
        { status: 404 }
      );
    }

    const blog = blogs[0];
    blog.content = blog.content ? JSON.parse(blog.content) : [];

    return new Response(JSON.stringify({ blog, success: true }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Something unexpected occurred.",
        message: error,
        success: false,
      }),
      { status: 500 }
    );
  }
};

export const createBlog = async (
  request: NextRequest
): Promise<NextResponse> => {
  const body: Blog = await request.json();

  const { error } = blogSchema.validate(body);
  if (error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );

  try {
    const title = body.title ?? null;
    const thumbnail = body.thumbnail ?? null;
    const category = body.category ?? null;
    const description = body.description ?? null;
    const thumbnailPublicId = body.thumbnailPublicId ?? null;

    // Insert the main blog data
    const result = await query<ResultSetHeader>(
      `INSERT INTO blog (title, thumbnail, category, description, thumbnailPublicId, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, ?, NOW(), NOW())`,
      [title, thumbnail, category, description, thumbnailPublicId]
    );

    // Get the ID of the newly inserted blog
    const blogId = result.insertId;

    // Insert blog content if present
    if (body.content && Array.isArray(body.content)) {
      const contentInsertPromises = body.content.map((contentItem: Content) => {
        // Ensure content properties are not undefined
        const type = contentItem.type ?? null;
        const value = contentItem.value ?? null;

        return query<ResultSetHeader>(
          `INSERT INTO blogcontent (blogId, type, value, createdAt, updatedAt)
          VALUES (?, ?, ?, NOW(), NOW())`,
          [blogId, type, value]
        );
      });
      await Promise.all(contentInsertPromises);
    }

    // Retrieve the newly created blog along with its content
    const [blog] = await query<RowDataPacket[]>(
      "SELECT * FROM blog WHERE id = ?",
      [blogId]
    );
    const [content] = await query<RowDataPacket[]>(
      "SELECT * FROM blogcontent WHERE blogId = ?",
      [blogId]
    );

    // Combine the blog and content data
    if (blog.length > 0) {
      blog[0].content = content;
    }

    return NextResponse.json({ success: true, blog }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error, error: "Unexpected error occured" },
      { status: 500 }
    );
  }
};

export const updateBlog = async (
  request: NextRequest,
  { params: { id } }: Props
): Promise<NextResponse> => {
  const body: Blog = await request.json();

  const { error } = blogUpdateSchema.validate(body);
  if (error)
    return NextResponse.json(
      { error: error.message, success: false },
      { status: 400 }
    );

  const blogId = parseInt(id);

  try {
    await pool.query("START TRANSACTION");

    // Check if the blog exists
    const [existingBlog] = await query<RowDataPacket[]>(
      "SELECT * FROM blog WHERE id = ?",
      [blogId]
    );

    if (!existingBlog) {
      return NextResponse.json(
        {
          success: false,
          error: `Blog with id: '${id}' not found.`,
        },
        { status: 404 }
      );
    }

    // Update the blog fields
    await query<ResultSetHeader>(
      `UPDATE blog SET title = ?, thumbnail = ?, category = ?, description = ?, thumbnailPublicId = ?, updatedAt = NOW() WHERE id = ?`,
      [
        body.title ?? existingBlog.title,
        body.thumbnail ?? existingBlog.thumbnail,
        body.category ?? existingBlog.category,
        body.description ?? existingBlog.description,
        body.thumbnailPublicId ?? existingBlog.thumbnailPublicId,
        blogId,
      ]
    );

    // Retrieve existing content for the blog
    const existingContent = await query<RowDataPacket[]>(
      "SELECT * FROM blogcontent WHERE blogId = ?",
      [blogId]
    );

    const existingContentIds = existingContent.map((c: any) => c.id);

    // Separate new, updated, and content to delete
    const newContent = body.content.filter((c: Content) => !c.id);
    const updatedContent = body.content.filter((c: Content) => c.id);
    const contentToDelete = existingContentIds.filter(
      (contentId: number) =>
        !body.content.some((c: Content) => c.id === contentId)
    );

    // Add new content
    for (const content of newContent) {
      await query<ResultSetHeader>(
        `INSERT INTO blogcontent (blogId, type, value, createdAt, updatedAt) VALUES (?, ?, ?, NOW(), NOW())`,
        [blogId, content.type, content.value]
      );
    }

    // Update existing content
    for (const content of updatedContent) {
      await query<ResultSetHeader>(
        `UPDATE blogcontent SET type = ?, value = ?, updatedAt = NOW() WHERE id = ?`,
        [content.type, content.value, content.id]
      );
    }

    // Remove deleted content
    for (const contentId of contentToDelete) {
      await query<ResultSetHeader>(`DELETE FROM blogcontent WHERE id = ?`, [
        contentId,
      ]);
    }

    // Commit the transaction
    await pool.query("COMMIT");

    // Retrieve the updated blog with its content
    const [updatedBlog] = await query<RowDataPacket[]>(
      "SELECT * FROM blog WHERE id = ?",
      [blogId]
    );

    const content = await query<RowDataPacket[]>(
      "SELECT * FROM blogcontent WHERE blogId = ?",
      [blogId]
    );

    // Combine the blog and content data

    updatedBlog.content = content;

    return NextResponse.json({ updatedBlog, success: true }, { status: 200 });
  } catch (error) {
    await pool.query("ROLLBACK");
    return NextResponse.json(
      {
        error: "Failed to update the blog.",
        message: error,
        success: false,
      },
      { status: 500 }
    );
  }
};

export const deleteBlog = async (
  request: NextRequest,
  { params: { id } }: Props
): Promise<NextResponse> => {
  const blogId = parseInt(id);

  try {
    const [blog] = await query<RowDataPacket[]>(
      "SELECT * FROM blog WHERE id = ?",
      [blogId]
    );

    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          error: `Blog with id: '${id}' not found.`,
        },
        { status: 404 }
      );
    }

    await query<ResultSetHeader>("DELETE FROM blog WHERE id = ?", [blogId]);

    return NextResponse.json({ blog, success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Something unexpected happened.",
        message: error,
        success: false,
      },
      { status: 500 }
    );
  }
};
