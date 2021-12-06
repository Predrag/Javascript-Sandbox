import { usersCollection } from '../database/collections/collections';
import {
    client,
    connectToDatabase,
    cursorDB,
} from '../database/connectToDatabase';
import { ObjectId } from 'mongodb';
import UsersInterface from '../interfaces/users.interface';

export async function findUserById(userId: string) {
    try {
        await connectToDatabase();
        const findResult = await cursorDB(usersCollection);
        return findResult.findOne({
            _id: new ObjectId(userId),
        });
    } catch (err) {
        console.log(err);
    }
}
export async function findAllUsers() {
    try {
        await connectToDatabase();
        const findResult = await cursorDB(usersCollection);
        return findResult.find({}).toArray();
    } catch (err) {
        console.log(err);
    }
}
export async function insertNewUser(user: UsersInterface) {
    const cursor = client.db(process.env.DATABASE).collection(usersCollection);
    try {
        await connectToDatabase();
        await cursor.insertOne({
            username: user.username,
            surname: user.surname,
            name: user.name,
            password: user.password,
            authenticated: false,
        });
    } catch (err) {
        console.log(err);
    }
}
