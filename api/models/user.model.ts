import { Schema, model } from 'mongoose';
import { UsersInterface } from '../interfaces/users.interface';

const schema = new Schema<UsersInterface>({
  username: { type: String, required: true },
  surname: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  authenticated: { type: String, required: true },
});

const UserModel = model<UsersInterface>('Users', schema);
export default UserModel;
