import { authenticate } from "@/middlewares/auth";
import { isAdmin } from "@/middlewares/isAdmin";
import { createVacancy, getVacancies } from "./controllers/vacancy";

export const POST = authenticate(isAdmin(createVacancy));
export const GET = getVacancies;
