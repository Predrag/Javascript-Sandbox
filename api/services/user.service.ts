import { ObjectId } from 'mongodb';
import { UsersInterface } from '../interfaces/users.interface';
import connectToDatabase from '../database/connectToDatabase';
import UserModel from '../models/user.model';

export async function findUserById(userId: string) {
  try {
    await connectToDatabase();
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
    await newUser.save();
    return true;
  } catch (err) {
    return err;
  }
}
