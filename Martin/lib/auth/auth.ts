import {Request, Response, NextFunction} from 'express';
import {users} from '../../fixtures/users-data';
import {comparePassword} from './hash-password';


const findUserByCredentials = ({username, password}) =>
	users.find(user => user.username === username && user.password === password);


async function basicAuth(req: Request, res: Response, next: NextFunction) {
	const header = req.headers.authorization || '';
	const [type, payload] = header.split(' ');
	console.log(type, payload);

	if (type === 'Basic' && payload !== undefined) {
		const credentials = Buffer.from(payload, 'base64').toString('ascii');
		console.log('Credentials', credentials);
		const [username, password] = credentials.split(':');

		const hashedPassword = users.find(user => user.username === username);
		if (hashedPassword) {
			const encodeHash = await comparePassword(password, hashedPassword.password);
			if (encodeHash) {
				const password = hashedPassword.password;
				const user = findUserByCredentials({username, password});
				console.log('Dnu', user);
				next();
			} else {
				console.log('Bad password of username');
				res.sendStatus(401);
				return;
			}
		} else {
			console.log('Bad password of username');
			res.sendStatus(401);
			return;
		}

	} else {
		res.sendStatus(401);
	}

}

export default basicAuth;
