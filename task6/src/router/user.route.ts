import { Hono } from "hono";
import * as userController from "../controllers/user.controller.js";

const userRouter = new Hono();

userRouter.get("/", userController.getAllUser);
userRouter.get("/:id", userController.getOneUser);
userRouter.post("/", userController.createUser);
userRouter.put("/:id", userController.editUser);

export { userRouter };