import express from 'express';
import {
  getAllUsers,
  getUserById, getUserByQuery,
  postCreateNewUser,
} from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.get('/query', getUserByQuery);
userRouter.post('/', postCreateNewUser);

export default userRouter;
