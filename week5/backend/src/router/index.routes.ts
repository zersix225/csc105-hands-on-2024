import { Hono } from "hono";
// import { todoRouter } from "./todo.routes.ts";
import { GetTodo, AddTodo } from "../controller/todo.controller.ts";

const mainRouter = new Hono();

mainRouter.get("/todo", GetTodo);
mainRouter.post("/todo", AddTodo);

export { mainRouter };
