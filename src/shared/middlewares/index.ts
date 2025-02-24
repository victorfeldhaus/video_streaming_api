import { Application } from "express";
import { bodyParser } from "./body_parser/body_parser";

export const middlewares = (app: Application) => {
    bodyParser(app);
};