import { isAdmin } from "@/middlewares/isAdmin";
import { authenticate } from "@/middlewares/auth";
import { createBlog, getBlogs } from "./controllers/article";

export const GET = getBlogs;
export const POST = authenticate(isAdmin(createBlog));
