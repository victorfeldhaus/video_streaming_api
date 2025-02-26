import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const envConfigSchema = z.object({
    DB_HOST: z.string(),
    DB_PORT: z.preprocess((val) => Number(val), z.number()),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_DATABASE: z.string(),
    API_PORT: z.preprocess((val) => Number(val), z.number()),

});


export const envConfig = envConfigSchema.parse(process.env);

