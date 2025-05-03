import { Hono } from "hono";
import * as todoController from "../controllers/todo.controller.ts";

const todoRouter = new Hono();

todoRouter.post("/", todoController.createTodo);
todoRouter.get("/:id", todoController.getTodoOneUser);
todoRouter.patch("/:id", todoController.update);

export { todoRouter };