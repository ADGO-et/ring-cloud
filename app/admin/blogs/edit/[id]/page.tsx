import { Blog } from "@/interfaces/Blog";
import BlogForm from "../../BlogForm";

interface Props {
  params: { id: string };
}

interface FetchBlog {
  success: boolean;
  blog: Blog;
}

const EditBlogPage = async ({ params: { id } }: Props) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`, {
    cache: "no-cache",
  });
  const { blog }: FetchBlog = await data.json();

  return (
    <div className="flex flex-col my-10 gap-5">
      <h1 className="text-2xl font-bold text-primaryColor">Edit Blog</h1>
      {blog ? (
        <BlogForm isEditing={true} blog={blog} />
      ) : (
        <p className="text-center">Blog with id: `{id}` not found.</p>
      )}
    </div>
  );
};

export default EditBlogPage;
