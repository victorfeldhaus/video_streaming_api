import { knexDb } from "../../../database/connection";

export const verifyUserExist = async (email: string) => {
    const user = knexDb.raw(`SELEC * FROM user WHERE email RLIKE '${email}'`);

    if (!user) 
        return false;

    return true;
};