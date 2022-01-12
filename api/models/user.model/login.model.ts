import { Schema, model } from 'mongoose';
import { LoginInterface } from '../../interfaces/login.interface';
import LoginEnum from '../../enums/loginEnum';

const schema = new Schema<LoginInterface>({
	username: { type: String, required: [true, 'Username is required'] },
	password: { type: String, required: [true, 'Password is required'] },
	role: {
		type: String,
		enum: [LoginEnum.admin, LoginEnum.user],
		required: [true, 'You have not entered role'],
	},
});

const LoginModel = model<LoginInterface>('Login', schema);

export default LoginModel;
