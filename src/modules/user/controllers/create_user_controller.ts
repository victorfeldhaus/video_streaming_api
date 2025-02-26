import { Request, Response } from "express";
import { verifyUserExist } from "../model/verify_user_exist";
import { createUser } from "../model/create_user";

export const createUserController = async (req: Request, res: Response): Promise<void> => {
   try {
        const { email, password } = req.body;

        if (typeof email !== "string" || typeof password !== "string") {
            res.status(422).send({ message: "INVALID_DATA" });
            return;
        }

        const userExist = await verifyUserExist(email);

        if (userExist) {
            res.status(409).send({ message: "USER_ALREADY_EXISTS" });
            return;
        }

        const userIdCreated = await createUser(email, password);

        res.status(201).send({ message: "USER_CREATED_SUCCESS", userId: userIdCreated });
   } catch (error) {
        res.status(500).send({ message: "SERVER_INTERNAL_ERROR" });
   }
};