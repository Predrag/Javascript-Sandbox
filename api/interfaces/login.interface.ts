import LoginEnum from '../enums/loginEnum';

export interface LoginInterface {
	id: string;
	username: string;
	password: string;
	role: LoginEnum;
}
