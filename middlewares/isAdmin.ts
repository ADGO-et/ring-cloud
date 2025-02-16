import { NextRequest, NextResponse } from "next/server";

export const isAdmin = (handler: Function) => {
  return async (request: NextRequest, context: any): Promise<NextResponse> => {
    const user = (request as any).user;

    if (!user || !user.isAdmin) {
      return NextResponse.json(
        { success: false, error: "Access denied: Admins only" },
        { status: 403 }
      );
    }

    return handler(request, context);
  };
};
