import { authenticate } from "@/middlewares/auth";
import { isAdmin } from "@/middlewares/isAdmin";
import { getUser, editUser, deleteUser } from "../controllers/user";

export const GET = authenticate(isAdmin(getUser));
export const PATCH = authenticate(isAdmin(editUser));
export const DELETE = authenticate(isAdmin(deleteUser));
