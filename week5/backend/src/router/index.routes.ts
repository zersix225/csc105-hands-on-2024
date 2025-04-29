import { Hono } from "hono";
import { GetTodo } from "../controller/todo.controller.ts";

const mainRouter = new Hono();

mainRouter.get("/todo", GetTodo);

export { mainRouter };
