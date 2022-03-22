import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';
import { UsersInterface } from '../interfaces/users.interface';
import connectToDb from '../database/connectToDb';
import UserModel from '../models/user.model/user.model';
import userBuilder from '../models/user.model/user.builder';

export async function findUsersService(userId: any) {
	const user = userBuilder(userId);
	let userFound;
	let isEmpty;
	let validProperties = true;
	let setLimit = 50;
	try {
		if (Object.prototype.hasOwnProperty.call(userId.query, 'limit')) {
			if (parseInt(userId.query.limit, 10) > setLimit) {
				throw new Error(`Max limit is set to ${setLimit}`);
			}
			setLimit = parseInt(userId.query.limit, 10);
		}
		Object.keys(userId.query).forEach((key) => {
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
		if (Object.prototype.hasOwnProperty.call(user, 'id') && validProperties) {
			if (mongoose.Types.ObjectId.isValid(user.id)) {
				userFound = await UserModel.find({
					_id: new ObjectId(user.id),
				});
				isEmpty = Object.keys(userFound).length === 0;
			}
			if (isEmpty !== true && isEmpty !== undefined) {
				return userFound;
			}
			throw new Error('You have entered incorrect or not existing ID');
		}
		userFound = await UserModel.find(user).limit(setLimit);
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

export async function insertNewUserService(user: UsersInterface) {
	try {
		await connectToDb();
		const newUser = new UserModel({
			username: user.username,
			surname: user.surname,
			name: user.name,
			password: user.password,
			authenticated: user.authenticated,
		});
		const error = newUser.validateSync();
		if (error) {
			return { message: error.message };
		}
		await newUser.save();
		return { User: newUser, message: `${newUser.username} was inserted` };
	} catch (err) {
		return { message: err };
	}
}
export async function deleteAllUsersService() {
	try {
		await connectToDb()
		let users = await UserModel.find({});
		for (let i=0; i < await UserModel.find({}).countDocuments({}); i++) {

			await UserModel.deleteMany({username: users[i].username})
		} return { message: 'Deleted all records'}
	} catch (e) {
		return e
	}
}