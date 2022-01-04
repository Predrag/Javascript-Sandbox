import jwt from 'jsonwebtoken';
import express from 'express';
import env from '../config/env';
import { getLogin } from '../controllers/login.controller';

const { accessTokenSecret } = env;

const loginRouter = express.Router();
loginRouter.post('/', async (req, res, next) => {
	const user = await getLogin(req, res, next);
	if (user) {
		const accessToken = jwt.sign({ username: user.username });
	}
});
