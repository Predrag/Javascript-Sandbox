import { users, UsersData } from '../../fixtures/users-data';

const findUserByCredentials = (obj):UsersData =>
	{ return users.find(user => { return user.username === obj.username && user.password === obj.password; }); };

export default findUserByCredentials;
