import express from 'express';
import {
    getAllUsers,
    getUserById,
    postCreateNewUser,
} from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', postCreateNewUser);

export default userRouter;
