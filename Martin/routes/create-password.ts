import express, { Request, Response } from 'express';
const createPassword = express.Router();

const getGeneratePassword = async (req: Request, res: Response) => {
	const payload = `${ req.body.username  }:${ req.body.password }`;
	const base64password = Buffer.from(payload).toString('base64');
	res.end(JSON.stringify(base64password, null, 2));
};

createPassword.post('/', getGeneratePassword);
export default createPassword;