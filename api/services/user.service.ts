import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';
import { UsersInterface } from '../interfaces/users.interface';
import connectToDatabase from '../database/connectToDatabase';
import UserModel from '../models/user.model/user.model';
import userBuilder from '../models/user.model/user.builder';

export async function findUsers(userId: any) {
  const user = userBuilder(userId);
  let userFound;
  let isEmpty;
  let validProperties = true;
  let invalidProperty;
  let setLimit = 3;
  try {
    if (Object.prototype.hasOwnProperty.call(userId.query, 'limit')) {
      if (parseInt(userId.query.limit, 10) > 4) {
        return { message: `Max limit is set to ${setLimit}` };
      }
      setLimit = parseInt(userId.query.limit, 10);
    }
    Object.keys(userId.query).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(user, key) !== true) {
        validProperties = false;
        invalidProperty = key;
        throw new Error();
      }
    });
    await connectToDatabase();
    Object.keys(user).forEach((key) => { if (user[key] === undefined || user[key] === '') { delete user[key]; } });
    if (Object.prototype.hasOwnProperty.call(user, 'id') && validProperties) {
      if (mongoose.Types.ObjectId.isValid(user.id)) {
        userFound = await UserModel.find({ _id: new ObjectId(user.id) });
        isEmpty = Object.keys(userFound).length === 0;
      }
      if (isEmpty !== true && isEmpty !== undefined) {
        return userFound;
      } return { message: 'You have entered incorrect or not existing ID' };
    }
    userFound = await UserModel.find(user).limit(setLimit);
    isEmpty = Object.keys(userFound).length === 0;
    if (isEmpty !== true && validProperties) {
      return userFound;
    }
    return { message: 'User not found' };
  } catch (err) {
    if (err instanceof Error) {
      return { message: `You have entered incorrect parameter: ${invalidProperty}` };
    }
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
      return { message: error.message };
    }
    await newUser.save();
    return { User: newUser, message: `${newUser.username} was inserted` };
  } catch (err) {
    return { message: err };
  }
}
