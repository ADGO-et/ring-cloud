import { isAdmin } from "@/middlewares/isAdmin";
import { authenticate } from "@/middlewares/auth";
import { deleteBlog, getBlog, updateBlog } from "../controllers/article";

export const GET = getBlog;
export const PATCH = authenticate(isAdmin(updateBlog));
export const DELETE = authenticate(isAdmin(deleteBlog));
