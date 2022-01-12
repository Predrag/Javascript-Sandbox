import connectToDb from '../database/connectToDb';
import { LoginInterface } from '../interfaces/login.interface';
import LoginModel from '../models/user.model/user.model';
import loginBuilder from '../models/user.model/login.builder';

export async function findUserByLoginUsername(login: any) {
	const user = loginBuilder(login);
	let userFound;
	let isEmpty;
	let validProperties = true;
	try {
		Object.keys(login.body).forEach((key) => {
			if (Object.prototype.hasOwnProperty.call(user, key) !== true) {
				validProperties = false;
				throw new Error(`You have entered incorrect parameter: ${key}`);
			}
		});
		Object.keys(user).forEach((key) => {
			if (user[key] === undefined || user[key] === '') {
				delete user[key];
			}
		});
		await connectToDb();
		userFound = await LoginModel.find(user);
		isEmpty = Object.keys(userFound).length === 0;
		if (isEmpty !== true && validProperties) {
			return userFound;
		}
		throw new Error('User not found');
	} catch (err) {
		if (err instanceof Error) {
			return {
				message: err.message,
			};
		}
		return err;
	}
}
