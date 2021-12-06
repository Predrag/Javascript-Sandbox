import { MongoClient } from 'mongodb';

const uri = `mongodb+srv://${process.env.USER_MONGO_DB_USER}:${process.env.PASSWORD_MONGO_DB_USER}@${process.env.DATABASE_URL}/${process.env.DATABASE}?retryWrites=true&w=majority`;
export const client = new MongoClient(uri);

export const connectToDatabase: () => Promise<void> = async () => {
    try {
        await client.connect();
    } catch (err) {
        console.log(err);
    }
};
export const cursorDB = async (collection: string) => {
    return client.db(process.env.DATABASE).collection(collection);
};

export const closeDatabase = async () => {
    try {
        await client.close();
    } catch (err) {
        console.log(err);
    }
};
