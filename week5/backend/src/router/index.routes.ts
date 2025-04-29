import { Hono } from "hono";
// import { todoRouter } from "./todo.routes.ts";
import { GetTodo, AddTodo, EditTodoName, DeleteTodo } from "../controller/todo.controller.ts";

const mainRouter = new Hono();

mainRouter.get("/todo", GetTodo);
mainRouter.post("/todo", AddTodo);
mainRouter.put("/todo/:id", EditTodoName);
mainRouter.delete("/todo/:id", DeleteTodo);

export { mainRouter };
