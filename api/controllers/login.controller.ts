import { NextFunction, Request, Response } from 'express';
import { findUserByLoginUsername } from '../services/login.service';

export async function getLogin(req: Request, res: Response, next: NextFunction) {
	const { body } = req;
	let foundedLogin;
	try {
		foundedLogin = await findUserByLoginUsername({ body }).then((users) =>
			res.status(200).json(users)
		);
	} catch (err) {
		next(err);
	}
	return foundedLogin;
}
