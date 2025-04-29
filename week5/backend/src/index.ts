import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { PrismaClient } from "./generated/prisma";
import { mainRouter } from "./router/index.routes.ts";
import { logger } from "hono/logger";
import { cors } from 'hono/cors';

const app = new Hono();
export const db = new PrismaClient();

app.use(logger());

app.use(
	cors({
		origin: ['http://localhost:5173'], // Your frontend application
	})
);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("", mainRouter);

serve(
  {
    fetch: app.fetch,
    port: 8000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
