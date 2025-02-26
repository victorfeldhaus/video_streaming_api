import { Application } from "express-serve-static-core";
import { createUserRouter } from "./create_user_router";

export const authRoutes = (app: Application) => {
    createUserRouter(app);
};