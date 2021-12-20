import { NextFunction, Request, Response } from 'express';
import { findUsers, insertNewUser } from '../services/user.service';
import { UsersInterface } from '../interfaces/users.interface';

export async function getUsers (req: Request, res: Response, next: NextFunction) {
	const { query } = req;
	let foundedUser;
	try {
		foundedUser =  await findUsers({ query }).then((users) => res.status(200).json(users));
	} catch (err) {
		next(err);
	}
	return foundedUser
}

export async function postCreateNewUser(req: Request, res: Response, next: NextFunction) {
	const user: UsersInterface = req.body;
	let insertedUser;
	try {
		insertedUser = await insertNewUser(user).then((insertUser) => insertUser);
	} catch (err) {
		next(err);
	}
	return insertedUser
}
