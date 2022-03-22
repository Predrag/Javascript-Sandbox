import { NextFunction, Request, Response } from 'express';
import {deleteAllUsersService, findUsersService, insertNewUserService} from '../services/user.service';
import { UsersInterface } from '../interfaces/users.interface';

export async function getUsersController (req: Request, res: Response, next: NextFunction) {
	const { query } = req;
	let foundedUser;
	try {
		foundedUser =  await findUsersService({ query }).then((users) => res.status(200).json(users));
	} catch (err) {
		next(err);
	}
	return foundedUser
}

export async function postCreateNewUserController(req: Request, res: Response, next: NextFunction) {
	const user: UsersInterface = req.body;
	let insertedUser;
	try {
		insertedUser = await insertNewUserService(user).then((insertUser) => insertUser);
	} catch (err) {
		next(err);
	}
	return insertedUser
}

export async function deleteAllUsersController (req: Request, res: Response, next: NextFunction) {
	let foundedUser;
	try {
		foundedUser =  await deleteAllUsersService().then((users) => res.status(200).json(users));
	} catch (err) {
		next(err);
	}
	return foundedUser
}
