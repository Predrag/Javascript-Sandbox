import { NextFunction, Request, Response } from 'express';
import {
    findAllUsers,
    findUserById,
    insertNewUser,
} from '../services/user.service';
import { closeDatabase } from '../database/connectToDatabase';
import UsersInterface from '../interfaces/users.interface';

export async function getAllUsers(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        await findAllUsers().then((r) => {
            res.status(200).json(r);
        });
    } catch (err) {
        next(err);
    } finally {
        await closeDatabase();
    }
}

export async function getUserById(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const userId = req.params.id;
    try {
        await findUserById(userId).then((r) => {
            res.status(200).json(r);
        });
    } catch (err) {
        next(err);
    } finally {
        await closeDatabase();
    }
}

export async function postCreateNewUser(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const user: UsersInterface = req.body;
    console.log(user);
    try {
        await insertNewUser(user).then((r) => {
            res.status(200).send('User Inserted to DB').json(r);
        });
    } catch (err) {
        next(err);
    } finally {
        await closeDatabase();
    }
}
