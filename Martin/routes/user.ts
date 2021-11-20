import express, {Request, Response} from 'express';
import {users} from '../fixtures/users';
import requestAuth from '../lib/auth/require-auth';

const userRouter = express.Router();

const getUsersRoute = (req: Request, res: Response) => {
	res.send(users);
};

const getUserRoute = (req: Request, res: Response) => {
	const user = users.find(userId => userId.id === req.params.id);
	res.send(user);
};
userRouter.use(requestAuth);
userRouter.get('/', getUsersRoute);
userRouter.get('/:id', getUserRoute);

export default userRouter;