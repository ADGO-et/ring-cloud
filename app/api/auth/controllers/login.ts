import { NextRequest, NextResponse } from "next/server";
import { RowDataPacket } from "mysql2/promise";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { loginSchema } from "../schema";

import { query } from "@/utils/db";

export const login = async (request: NextRequest): Promise<NextResponse> => {
  try {
    const body = await request.json();

    const { error } = loginSchema.validate(body);
    if (error)
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );

    let users = await query<RowDataPacket[]>(
      "SELECT * FROM user WHERE userName = ?",
      [body.userName]
    );
    if (users.length === 0)
      return NextResponse.json(
        { success: false, error: "Wrong username or password." },
        { status: 400 }
      );

    const user = users[0];

    const { id, isAdmin, firstName, lastName, userName } = user;

    const passwordMatches = bcrypt.compareSync(body.password, user.password);

    if (!passwordMatches)
      return NextResponse.json(
        { success: false, error: "Wrong username or password." },
        { status: 400 }
      );

    const token = jwt.sign(
      { id, isAdmin, firstName, lastName, userName },
      process.env.JWT_KEY!
    );

    return NextResponse.json({ success: true, token });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Something unexpected happened." },
      { status: 500 }
    );
  }
};
