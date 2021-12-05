import UsersInterface from '../interfaces/users.interface';

export const users: UsersInterface[] = [
	{
		id: '1',
		username: 'predrag',
		surname: 'Durisin',
		name: 'Martin',
		password: process.env.PASSWORD_MARTIN,
		authenticated: false
	},
	{
		id: '2',
		username: 'minuseno',
		surname: 'Bugar',
		name: 'Mino',
		password: process.env.PASSWORD_MINO,
		authenticated: false
	}
];

