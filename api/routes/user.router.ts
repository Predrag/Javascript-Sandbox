import express from 'express';
import {deleteAllUsersController, getUsersController, postCreateNewUserController} from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.get('/', getUsersController);
userRouter.post('/', async (req, res, next) => {
	if (req.headers['content-type'] === 'application/json') {
		res.status(200).json(await postCreateNewUserController(req, res, next));
	} else {
		const users = await postCreateNewUserController(req, res, next);
		res.render('sendPassword', { password: await users.User });
	}
});
userRouter.delete('/', deleteAllUsersController)

export default userRouter;
