import { Schema, model } from 'mongoose';
import { UsersInterface } from '../../interfaces/users.interface';

const schema = new Schema<UsersInterface>({
  username: { type: String, required: [true, 'Username is required'] },
  surname: { type: String, required: [true, 'Surname is required'] },
  name: { type: String, required: [true, 'Name is required'] },
  password: { type: String, required: [true, 'Password is required'] },
  authenticated: { type: String, required: [true, 'Auth is required'] },
});

const UserModel = model<UsersInterface>('Users', schema);

export default UserModel;
