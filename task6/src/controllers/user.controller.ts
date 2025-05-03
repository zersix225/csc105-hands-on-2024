import type { Context } from "hono";
import * as userModel from "../models/user.model.ts"
import type { User } from "../types/index.ts";

const getAllUser = async (c: Context) => {
	const users = await userModel.getAllUser()
	return c.json(
		{
			success: true,
			msg: "Fetch users successfull",
			data: users,
		}
	)
}

const getOneUser = async (c: Context) => {
	const id = c.req.param('id')
	const newId = parseInt(id)

	const user = await userModel.getOneUser(newId)
	return c.json(
		{
			success: true,
			data: user,
		}
	)
}

const editUser = async (c: Context) => {
	const body = await c.req.json<User>()
	const userId = parseInt(c.req.param('id'))
	const firstName = body.firstName
	const lastName = body.lastName

	userModel.editUser(userId, firstName, lastName)

	return c.json(
		{
			success: true,
		}
	)
}

const createUser = async (c: Context) => {
	try {
		const body = await c.req.json<User>();
		if (!body.firstName || !body.lastName)
			return c.json(
				{
					success: false,
					data: null,
					msg: "Missing required fields",
				},
				400
			);
		if (await userModel.isDuplicate(body.firstName, body.lastName)) {
			return c.json({
				success: false,
				data: null,
				msg: "firstName or lastName is duplicated",
			});
		}
		const newUser = await userModel.createUser(
			body.firstName,
			body.lastName
		);
		return c.json({
			success: true,
			data: newUser,
			msg: "Created new User!",
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
};

export { createUser, getAllUser, getOneUser, editUser };