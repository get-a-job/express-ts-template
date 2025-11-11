import express from "express";
import path from "path";
import { errorHandler } from "./middlewares/errorHandler.js";
import expressLayouts from "express-ejs-layouts";
import { registerRoutes } from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));

// Routes
registerRoutes(app);

app.use(errorHandler);

export default app;