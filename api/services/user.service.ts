import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
import { UsersInterface } from '../interfaces/users.interface';
import connectToDatabase from '../database/connectToDatabase';
import UserModel from '../models/user.model/user.model';
import userBuilder from '../models/user.model/user.builder';

export async function findUserByQuery(userId: any) {
  try {
    mongoose.set('debug', true);
    await connectToDatabase();
    const user = userBuilder(userId);
    Object.keys(user).forEach((key) => { if (user[key] === undefined || user[key] === '') { delete user[key]; } });
    const userFound = await UserModel.find(user);
    const isEmpty = Object.keys(userFound).length === 0;
    if (isEmpty !== true) {
      return userFound;
    } return 'No users found';
  } catch (err) {
    return err;
  }
}

export async function findUserById(userId: string) {
  try {
    await connectToDatabase();
    mongoose.set('debug', true);
    return await UserModel.findOne({
      _id: new ObjectId(userId),
    });
  } catch (err) {
    return err;
  }
}
export async function findAllUsers() {
  try {
    await connectToDatabase();
    mongoose.set('debug', true);
    return await UserModel.find({});
  } catch (err) {
    return err;
  }
}
export async function insertNewUser(user: UsersInterface) {
  try {
    await connectToDatabase();
    const newUser = new UserModel({
      username: user.username,
      surname: user.surname,
      name: user.name,
      password: user.password,
      authenticated: user.authenticated,
    });
    const error = newUser.validateSync();
    if (error) {
      return error.message;
    }
    await newUser.save();
    return { User: newUser, message: `${newUser.username} was inserted` };
  } catch (err) {
    return err;
  }
}
