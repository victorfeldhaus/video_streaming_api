import express from "express";
import { envConfig } from "./config/env/env_config";
import { middlewares } from "./shared/middlewares";
import { routes } from "./modules/routes";

const PORT = envConfig.API_PORT;

const server = () => {
    const app = express();

    middlewares(app)

    routes(app)

    app.listen(PORT, () => `Server is running in port http://localhost:${PORT}`);
};

server();