import type { Context } from "hono";
import * as todoModel from "../models/todo.model.ts";
import type { Todo } from "../types/index.ts";
import { User } from "discord.js";

const createTodo = async (c: Context) => {
    try {
        const body = await c.req.json<Todo>();
        if (!body.title || !body.userId)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        const newTodo = await todoModel.createTodo(body.title, body.userId);
        return c.json({
            success: true,
            data: newTodo,
            msg: "Created new Todo!",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const getTodoOneUser = async (c: Context) => {
    const userId = parseInt(c.req.param('id'))
    const todo = await todoModel.getTodoOneUser(userId)

    return c.json(
        {
            success: true,
            msg: 'Fetch only one todo successfull',
            data: todo
        }
    )

}

const update = async (c: Context) => {
    const body = await c.req.json<Todo>()
    const id = parseInt(c.req.param('id'))
    const result: string[] = []

    if (body.title != undefined) {
        await todoModel.updateTitle(body.title, id)
        result.push('Title updated successfully')
    }

    if (body.completed != undefined) {
        await todoModel.updateComplete(body.completed, id)
        result.push('Completion status updated successfully')
    }

    return c.json({ msg: result.join(', ') })
}

export { createTodo, getTodoOneUser, update };