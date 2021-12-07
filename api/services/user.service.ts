import { ObjectId } from 'mongodb';
import { connectToDatabase, cursorDB } from '../database/connectToDatabase';
import { UsersInterface } from '../interfaces/users.interface';
import usersCollection from '../database/collections/collections';

export async function findUserById(userId: string) {
  try {
    await connectToDatabase();
    const findResult = cursorDB(usersCollection);
    return await findResult.findOne({
      _id: new ObjectId(userId),
    });
  } catch (err) {
    return err;
  }
}
export async function findAllUsers() {
  try {
    await connectToDatabase();
    const findResult = cursorDB(usersCollection);
    return await findResult.find({}).toArray();
  } catch (err) {
    return err;
  }
}
export async function insertNewUser(user: UsersInterface) {
  try {
    await connectToDatabase();
    const insertUser = cursorDB(usersCollection);
    return await insertUser.insertOne({
      username: user.username,
      surname: user.surname,
      name: user.name,
      password: user.password,
      authenticated: false,
    });
  } catch (err) {
    return err;
  }
}
