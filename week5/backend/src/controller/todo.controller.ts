import type { Context } from "hono";
import * as todoModel from "../model/todo.model.ts";

type checktodo = {
  name: string
  status: false
}

const GetTodo = async (c: Context) => {
  try {
    const data = await todoModel.GetTodo();
    return c.json(data, 200);
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const AddTodo = async (c: Context) => {
  try {
    const body = await c.req.json<checktodo>();
    if (!body.name)
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    const newTodo = todoModel.AddTodo(body.name);
    return c.json({
      success: true,
      data: newTodo,
      msg: "Add new Todo!",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const EditTodoName = async (c: Context) => {
  try {
    const param = c.req.query("id");
    if (param !== undefined && param !== null) {
      const body = await c.req.json<checktodo>();
      if (!body.name)
        return c.json(
          {
            success: false,
            data: null,
            msg: "Missing required fields",
          },
          400
        );
      const newTodo = todoModel.EditTodo(parseInt(param), body.name);
      return c.json({
        success: true,
        data: newTodo,
        msg: "Edit Todo!",
      });
    }
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const CompleteTodo = (c: Context) => {
  try {
    const param = c.req.query("id");
    if (param !== undefined && param !== null) {
      const newTodo = todoModel.SuccessTodo(parseInt(param));
      return c.json({
        success: true,
        data: newTodo,
        msg: "Complete",
      });
    }
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const DeleteTodo = (c: Context) => {
  try {
    const param = c.req.query("id");
    if (param !== undefined && param !== null) {
      const newTodo = todoModel.DeleteTodo(parseInt(param));
      return c.json({
        success: true,
        data: newTodo,
        msg: "Delete!!",
      });
    }
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

export { GetTodo, AddTodo, EditTodoName, CompleteTodo, DeleteTodo };
