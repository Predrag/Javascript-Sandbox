import { MongoClient } from 'mongodb';

const uri = `mongodb+srv://${process.env.USER_MONGO_DB_USER}:${process.env.PASSWORD_MONGO_DB_USER}@${process.env.DATABASE_URL}/${process.env.DATABASE}?retryWrites=true&w=majority`;
export const client = new MongoClient(uri);

export const connectToDatabase: () => Promise<void> = async () => {
  try {
    await client.connect();
    return true;
  } catch (err) {
    return err;
  }
};
// eslint-disable-next-line max-len
export const cursorDB = (collection: string) => client.db(process.env.DATABASE).collection(collection);

export const closeDatabase = async () => {
  try {
    await client.close();
    return true;
  } catch (err) {
    return err;
  }
};
