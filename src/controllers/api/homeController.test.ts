import { getHome } from "./homeController.js";
import type { Request, Response, NextFunction } from "express";
import { vi, describe, it, expect } from 'vitest'

describe("homeController", () => {
    it("should send the correct message", () => {
        const req = {} as Request;
        const res = { send: vi.fn() } as unknown as Response;
        const next = vi.fn() as NextFunction;

        getHome(req, res, next);

        expect(res.send).toHaveBeenCalledWith("Welcome to the home api");
    });
});
