import express, {Request, Response} from 'express';

const createPassword = express.Router();


const getCreateBase64Password = (req: Request, res: Response) => {
	const header = req.headers.authorization || '';
	const [type, payload] = header.split(' ');
	console.log(type, payload);

	if (type === 'Basic') {
		const base64password = Buffer.from(payload).toString('base64');
		res.send(base64password);

	} else {
		res.sendStatus(401);
	}
};

createPassword.get('/', getCreateBase64Password);
export default createPassword;