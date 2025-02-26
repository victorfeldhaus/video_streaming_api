import { Request, Response } from "express";
import { verifyUserExist } from "../model/verify_user_exist";
import { createUser } from "../model/create_user";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;

    if (typeof email !== "string" || typeof password !== "string") {
        return res.status(422).send({ message: "INVALID_DATA" });
    }

    const userExist = await verifyUserExist(email);

    if (userExist) {
        return res.status(409).send({ message: "USER_ALREADY_EXISTS" });
    }

    const userIdCreated = await createUser(email, password);

    return res.status(201).send({ message: "USER_CREATED_SUCCESS", userId: userIdCreated });
};