import { NextFunction, Request, Response } from 'express';
import { findUsers, insertNewUser } from '../services/user.service';
import { UsersInterface } from '../interfaces/users.interface';

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
	const { query } = req;
	try {
		return await findUsers({ query }).then((users) => res.status(200).json(users));
	} catch (err) {
		next(err);
	}
};

export async function postCreateNewUser(req: Request, res: Response, next: NextFunction) {
	const user: UsersInterface = req.body;
	try {
		return await insertNewUser(user).then((insertUser) => insertUser);
	} catch (err) {
		next(err);
	}
}
