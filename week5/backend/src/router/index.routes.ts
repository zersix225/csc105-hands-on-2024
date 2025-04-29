import { Hono } from "hono";
// import { todoRouter } from "./todo.routes.ts";
import { GetTodo, AddTodo, EditTodoName, DeleteTodo } from "../controller/todo.controller.ts";

const mainRouter = new Hono();

mainRouter.get("/todos", GetTodo);
mainRouter.post("/todos", AddTodo);
mainRouter.put("/todos/:id", EditTodoName);
mainRouter.delete("/todos/:id", DeleteTodo);

export { mainRouter };
