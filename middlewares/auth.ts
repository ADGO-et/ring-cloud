import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const authenticate = (handler: Function) => {
  return async (request: NextRequest, context: any): Promise<NextResponse> => {
    const authHeader = request.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json(
        { success: false, error: "Authorization header is missing" },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1]; // Assuming "Bearer <token>"

    try {
      const decoded = jwt.verify(token, process.env.JWT_KEY!);
      (request as any).user = decoded;

      return handler(request, context);
    } catch (error) {
      return NextResponse.json(
        { success: false, error: "Invalid or expired token" },
        { status: 401 }
      );
    }
  };
};
