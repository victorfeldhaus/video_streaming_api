import { knexDb } from "../../../database/connection"

export const createUser = async (email: string, password: string) => {
    const userI = knexDb.raw(`INSERT INTO user (email, password) VALUES (?, ?)`, [email, password]);

    return userI;
}