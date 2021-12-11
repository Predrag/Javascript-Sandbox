import { NextFunction, Request, Response } from 'express';
import { findUsers, insertNewUser } from '../services/user.service';
import { UsersInterface } from '../interfaces/users.interface';

export async function getUsers(req: Request, res: Response, next: NextFunction) {
	const { query } = req;
	try {
		await findUsers({ query }).then((users) => {
			res.status(200).json(users);
		});
	} catch (err) {
		next(err);
	}
	next();
}

export async function postCreateNewUser(req: Request, res: Response, next: NextFunction) {
	const user: UsersInterface = req.body;
	try {
		await insertNewUser(user).then((insertUser) => {
			res.status(200).json(insertUser);
		});
	} catch (err) {
		next(err);
	}
}
