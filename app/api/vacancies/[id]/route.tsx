import { authenticate } from "@/middlewares/auth";
import { isAdmin } from "@/middlewares/isAdmin";
import { getVacancy, editVacancy, deleteVacancy } from "../controllers/vacancy";

export const GET = getVacancy;
export const PATCH = authenticate(isAdmin(editVacancy));
export const DELETE = authenticate(isAdmin(deleteVacancy));
