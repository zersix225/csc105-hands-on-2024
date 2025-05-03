import { prisma } from "../index.ts"

const getAllUser = async () => {
    const user = await prisma.user.findMany()
    return user
}

const getOneUser = async (id: number) => {
    const user = await prisma.user.findFirst({
        where: {
            id: id
        }
    })

    return user
}

const editUser = async (userId: number, firstName: string, lastName: string) => {
    const updatedTodo = await prisma.user.update({
        where: { 
            id: userId
        },
        data: { 
            firstName: firstName,
            lastName: lastName,
        },
    });
    return updatedTodo;
}

const isDuplicate = async (firstName: string, lastName: string) => {
    const user = await prisma.user.findFirst({
        where: {
            firstName: firstName,
            lastName: lastName,
        }
    })
    return user
}

const createUser = async (firstName: string, lastName: string) => {
    const user = await prisma.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}

export { isDuplicate, createUser, getAllUser, getOneUser, editUser }