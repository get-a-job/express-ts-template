import type { Request, Response, NextFunction } from "express";

export const getHome = (req: Request, res: Response, next: NextFunction) => {
    res.send("Server running on port 3000")
};