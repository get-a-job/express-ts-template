import express from "express";
import homeRoutes from "./routes/homeRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());

// Routes
app.use("/", homeRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;