require("dotenv").config();

import express from "express";

import { stats } from "./appHandlers/stats";
import { initDB } from "./db";
import { logger } from "./logger";

const port = process.env.APP_PORT || 3000;

initDB()
    .then(() => {
        logger.info("Connected to DB. Starting server");

        express()
            .use(express.json())
            .use(express.urlencoded({ extended: true }))
            .get("/", (_, res) => {
                res.sendFile(`${__dirname}/appHandlers/index.html`);
            })
            .get("/stats", stats)
            .listen(port, () => {
                logger.info(`Example app listening on port ${port}!`);
                logger.info(`http://localhost:${port}`);
            });
    })
    .catch(error => logger.error(error));

process.on("uncaughtException", e => {
    logger.error(e);
    process.exit(1);
});
process.on("unhandledRejection", e => {
    logger.error(e);
    process.exit(1);
});