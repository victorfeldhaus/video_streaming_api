import { Application } from "express-serve-static-core";
import { createUserRouter } from "./create_user_router";

export const userRoutes = (app: Application) => {
    createUserRouter(app);
};