import express from 'express';
import { getUsers, postCreateNewUser } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.post('/', postCreateNewUser);

export default userRouter;
