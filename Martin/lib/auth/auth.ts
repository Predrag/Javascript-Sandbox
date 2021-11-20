import {Request, Response, NextFunction} from 'express';
import {users} from '../../fixtures/users';
// import {comparePassword} from './hash-password';

const findUserByCredentials = ({username, password}) =>
	users.find(user => user.username === username && user.password === password);


const basicAuth = (req: Request, res: Response, next: NextFunction) => {
	const header = req.headers.authorization || '';
	const [type, payload] = header.split(' ');
	console.log(type, payload);

	if (type === 'Basic') {
		const credentials = Buffer.from(payload, 'base64').toString('ascii');
		console.log(credentials);
		const [username, password] = credentials.split(':');
		// const encodeHash = comparePassword(password, process.env.PASSWORD_MARTIN);
		const user = findUserByCredentials({username, password});
		if (user) {
			console.log('Logged');
		} else {
			console.log('Bad password of username');
			res.sendStatus(401);
			return;
		}
		next();

	} else {
		res.sendStatus(401);
	}

};

export default basicAuth;
