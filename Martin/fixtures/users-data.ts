interface UsersData {
	id: string,
	username: string
	surname: string,
	name: string,
	password: string,

}

export const users: UsersData[] = [
	{
		id: '1',
		username: 'predrag',
		surname: 'Durisin',
		name: 'Martin',
		password: process.env.PASSWORD_MARTIN
	},
	{
		id: '2',
		username: 'minuseno',
		surname: 'Bugar',
		name: 'Mino',
		password: process.env.PASSWORD_MINO
	}
];

