import { PostgreSqlContainer } from "@testcontainers/postgresql";
import { Client } from "pg";
import { describe, it, expect } from "vitest";

describe("db test", () => {
    it("connects to postgres", async () => {
        const container = await new PostgreSqlContainer("postgres:18").start();

        const client = new Client({
            connectionString: container.getConnectionUri(),
        });
        await client.connect();

        const result = await client.query("SELECT 1 as value");
        expect(result.rows[0].value).toBe(1);

        await client.end();
        await container.stop();
    });
});
