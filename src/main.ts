import express from "express";
import { envConfig } from "./config/env/env_config";
import { middlewares } from "./shared/middlewares";
import { routes } from "./modules/routes";
import { publicRoutes } from "./modules/routes/public";

const PORT = envConfig.API_PORT;

const server = () => {
    const app = express();

    publicRoutes(app)

    middlewares(app)

    routes(app)

    app.listen(PORT, () => console.log(`Server is running in port http://localhost:${PORT}`));
};

server();