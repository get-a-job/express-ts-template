import type { Express } from "express";

import homeWebRoutes from "./web/homeRoutes.js"

import homeApiRoutes from "./web/homeRoutes.js"

export function registerRoutes(app: Express) {

    app.use("/", homeWebRoutes);
    app.use("/api", homeApiRoutes);
}