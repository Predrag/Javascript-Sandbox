import { NextFunction, Request, Response } from 'express';
import {
  findAllUsers,
  findUserById, findUserByQuery,
  insertNewUser,
} from '../services/user.service';
import { UsersInterface } from '../interfaces/users.interface';

export async function getAllUsers(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    await findAllUsers().then((r) => {
      res.status(200).json(r);
    });
  } catch (err) {
    next(err);
  }
}

export async function getUserById(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const userId = req.params.id;
  try {
    await findUserById(userId).then((r) => {
      res.status(200).json(r);
    });
  } catch (err) {
    next(err);
  }
}
export async function getUserByQuery(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { query } = req;
  try {
    await findUserByQuery({ query }).then((users) => {
      res.status(200).json(users);
    });
  } catch (err) {
    next(err);
  }
}

export async function postCreateNewUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const user: UsersInterface = req.body;
  try {
    await insertNewUser(user).then((insertUser) => {
      res.status(200).json(insertUser);
    });
  } catch (err) {
    next(err);
  }
}
