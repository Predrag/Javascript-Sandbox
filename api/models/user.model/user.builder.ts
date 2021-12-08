function userBuilder(user):object {
  return {
    username: user.query.username,
    surname: user.query.surname,
    name: user.query.name,
    password: user.query.password,
    authenticated: user.query.authenticated,
  };
}
export default userBuilder;
