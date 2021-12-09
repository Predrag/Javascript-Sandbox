import { connect } from 'mongoose';

const uri = `mongodb+srv://${process.env.USER_MONGO_DB_USER}:${process.env.PASSWORD_MONGO_DB_USER}@${process.env.DATABASE_URL}/${process.env.DATABASE}?retryWrites=true&w=majority`;
const connectToDatabase: () => Promise<void> = async () => {
  try {
    await connect(uri);
    return true;
  } catch (err) {
    return err;
  }
};

export default connectToDatabase;
