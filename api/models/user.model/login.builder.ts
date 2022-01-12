function loginBuilder(login) {
	return {
		username: login.body.username,
		password: login.body.password,
	};
}
export default loginBuilder;
