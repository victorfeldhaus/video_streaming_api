import { Application } from "express";
import { authRoutes } from "../auth/routes";

export const routes = (app: Application) => {
    authRoutes(app);
};