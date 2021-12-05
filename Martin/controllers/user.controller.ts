import { NextFunction, Request, Response } from 'express';
import { findAllUsers, findUserById } from '../services/user.service';

export async function getAllUsers(req: Request, res: Response, next: NextFunction) {
	try {
		const allUsers = await findAllUsers();
		res.status(200).json(allUsers);
	} catch (err) {
		next(err);
	}
}

export async function getUserById(req: Request, res: Response, next: NextFunction) {
	const userId = req.params.id;
	try {
		const user = await findUserById(userId);
		res.status(200).json(user);
	} catch (err) {
		next(err);
	}
}