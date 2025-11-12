import request from "supertest";
import app from "../../app.js";
import { describe, it, expect } from "vitest";

describe("GET /", () => {
    it("should return the home page", async () => {
        const res = await request(app).get("/");
        expect(res.status).toBe(200);
        expect(res.text).toContain(" Hello from EJS 👋");
    });
});
