import config from "@/config/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    out: './migrations',
    schema: './database/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: config.env.DATABASE_URL!,
    },
});