import express, { Application } from "express";


export const bodyParser = (app: Application) => {
    app.use(express.json({ limit: "50mb"}))
};