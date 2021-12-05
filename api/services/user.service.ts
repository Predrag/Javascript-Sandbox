import { users } from '../fixtures/users-data';
import UsersInterface from '../interfaces/users.interface';
import HttpException from '../exceptions/HttpException';

export async function findAllUsers() {
	const allUsers: Promise<unknown> = new Promise((resolve) => {
		resolve(users);
	});
	if (allUsers) {
		return allUsers;
	} throw new HttpException(404, 'Not Users not found');
}

export async function findUserById(userId: string) {
	const findUser: UsersInterface = await users.find(user => {
		return user.id === userId; });
	if (findUser) {
		return findUser;
	}
	throw new HttpException(404, 'User not found');
}