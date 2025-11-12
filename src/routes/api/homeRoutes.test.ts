import request from "supertest";
import app from "../../app.js";
import { describe, it, expect } from "vitest";

describe("GET /api", () => {
    it("should return the home api", async () => {
        const res = await request(app).get("/api");
        expect(res.status).toBe(200);
        expect(res.text).toContain("Welcome to the home api");
    });
});
