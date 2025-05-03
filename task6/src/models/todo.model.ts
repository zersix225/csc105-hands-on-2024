import { prisma } from "../index.ts";

const createTodo = async (title: string, userId: number) => {
    const todo = await prisma.todo.create({
        data: {
            title: title,
            userId: userId,
        },
    });
    return todo;
}

const getTodoOneUser = async (userId : number) => {
    const todoOneUser = await prisma.user.findFirst({
        where: {
            id: userId
        },
        select: {
            Todo: {
                select: {
                    title: true,
                    completed: true
                }
            }
        }
    })

    return todoOneUser
}

const updateComplete = async (complete: boolean, todoId: number) => {
    const newComplete = await prisma.todo.update({
        where: {
            id: todoId
        },
        data: {
            completed: complete
        }
    })
    return newComplete
}

const updateTitle = async (title: string, todoId: number) => {
    const newTitle = await prisma.todo.update({
        where: {
            id: todoId
        },
        data: {
            title: title
        }
    })
    return newTitle
}

export { createTodo, getTodoOneUser, updateComplete, updateTitle };