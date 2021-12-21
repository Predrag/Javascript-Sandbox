let env;
if (process.env.NODE_ENV === 'development') {
	env = {
		uri: `mongodb+srv://${process.env.USER_MONGO_DB_USER}:${process.env.PASSWORD_MONGO_DB_USER}@${process.env.DATABASE_URL}/${process.env.DATABASE}?retryWrites=true&w=majority`,
		PORT: process.env.PORT,
	};
}
export default env;
