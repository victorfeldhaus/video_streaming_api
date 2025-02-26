import { Application } from "express";
import { body } from "express-validator/lib/middlewares/validation-chain-builders";
import { createUserController } from "../controllers/create_user_controller";

export const createUserRouter = (app: Application) => {
    app.post(AUTH.CREATE_USER, 
        body("email").isEmail().withMessage("Invalid email"),
        body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
        createUserController
    );
};