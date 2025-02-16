import { authenticate } from "@/middlewares/auth";
import { isAdmin } from "@/middlewares/isAdmin";
import { createUser, getUsers } from "./controllers/user";

export const POST = createUser;
export const GET = authenticate(isAdmin(getUsers));
