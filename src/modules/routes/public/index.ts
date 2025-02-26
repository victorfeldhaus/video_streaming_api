import { Application } from "express";
import { userRoutes } from "../../user/routes";

export const publicRoutes = (app: Application) => {
    userRoutes(app);
};