import express from 'express';
import {deleteAllUsers, getUsers, postCreateNewUser} from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.post('/', async (req, res, next) => {
	if (req.headers['content-type'] === 'application/json') {
		res.status(200).json(await postCreateNewUser(req, res, next));
	} else {
		const users = await postCreateNewUser(req, res, next);
		res.render('sendPassword', { password: await users.User });
	}
});
userRouter.delete('/', deleteAllUsers)

export default userRouter;
