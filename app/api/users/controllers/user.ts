import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { User } from "@/interfaces/User";
import { schema, updateSchema } from "../schema";

import { query } from "@/utils/db";

interface Props {
  params: { id: string };
}

export const getUsers = async (request: NextRequest): Promise<NextResponse> => {
  try {
    const users = await query<RowDataPacket[]>(
      "SELECT id, firstName, lastName, isAdmin, userName FROM user"
    );
    return NextResponse.json({ users, success: true }, { status: 200 });
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

export const getUser = async (
  request: NextRequest,
  { params: { id } }: Props
): Promise<NextResponse> => {
  try {
    const users = await query<RowDataPacket[]>(
      "SELECT id, firstName, lastName, isAdmin ,userName FROM user WHERE id = ?",
      [parseInt(id)]
    );

    if (users.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: `User with id: '${id}' not found.`,
        },
        { status: 404 }
      );
    }
    if (users.length === 0)
      return NextResponse.json(
        {
          success: false,
          error: `User with id: '${id}' not found`,
        },
        { status: 404 }
      );

    return NextResponse.json(
      { user: users[0], success: true },
      { status: 200 }
    );
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

export const createUser = async (
  request: NextRequest
): Promise<NextResponse> => {
  try {
    const body: User = await request.json();

    const { error } = schema.validate(body);
    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }

    const existingUsers = await query<RowDataPacket[]>(
      "SELECT userName FROM user WHERE userName = ?",
      [body.userName]
    );
    if (existingUsers.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: `User with username: '${body.userName}' already exists.`,
        },
        { status: 400 }
      );
    }

    const hashedPassword = bcrypt.hashSync(body.password, 10);

    // Insert the new user
    const result = await query<ResultSetHeader>(
      "INSERT INTO user (firstName, lastName, userName, password) VALUES (?, ?, ?, ?)",
      [body.firstName, body.lastName, body.userName, hashedPassword]
    );

    // Retrieve the created user using the insertId
    const user = await query<RowDataPacket[]>(
      "SELECT id, firstName, lastName, isAdmin,userName FROM user WHERE id = ?",
      [result.insertId]
    );
    return NextResponse.json({ user: user[0], success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Something unexpected happened." },
      { status: 500 }
    );
  }
};

export const editUser = async (
  request: NextRequest,
  { params: { id } }: Props
): Promise<NextResponse> => {
  try {
    const body: User = await request.json();

    const { error } = updateSchema.validate(body);
    if (error)
      return NextResponse.json(
        { error: error.message, success: false },
        { status: 400 }
      );

    const existingUsers = await query<RowDataPacket[]>(
      "SELECT * FROM user WHERE id = ?",
      [parseInt(id)]
    );
    if (existingUsers.length === 0) {
      return NextResponse.json(
        { success: false, error: `User with id: '${id}' not found.` },
        { status: 404 }
      );
    }

    if (body.password) {
      body.password = bcrypt.hashSync(body.password, 10);
    }

    // Generate the SET clause for the update dynamically
    const updateFields = Object.keys(body)
      .map((key) => `${key} = ?`)
      .join(", ");
    const updateValues = Object.values(body);

    await query<ResultSetHeader>(
      `UPDATE user SET ${updateFields} WHERE id = ?`,
      [...updateValues, parseInt(id)]
    );

    const updatedUsers = await query<RowDataPacket[]>(
      "SELECT id, firstName, lastName, isAdmin, userName FROM user WHERE id = ?",
      [parseInt(id)]
    );

    return NextResponse.json(
      { user: updatedUsers[0], success: true },
      { status: 200 }
    );
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

export const deleteUser = async (
  request: NextRequest,
  { params: { id } }: Props
): Promise<NextResponse> => {
  try {
    const existingUsers = await query<RowDataPacket[]>(
      "SELECT id, firstName, lastName, isAdmin, userName FROM user WHERE id = ?",
      [parseInt(id)]
    );
    if (existingUsers.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: `User with id: '${id}' not found.`,
        },
        { status: 404 }
      );
    }

    // Delete the user
    await query<ResultSetHeader>("DELETE FROM user WHERE id = ?", [
      parseInt(id),
    ]);

    return NextResponse.json(
      { user: existingUsers[0], success: true },
      { status: 200 }
    );
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
