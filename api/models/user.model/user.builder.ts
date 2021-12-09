function userBuilder(user) {
  return {
    id: user.query.id,
    username: user.query.username,
    surname: user.query.surname,
    name: user.query.name,
    password: user.query.password,
    authenticated: user.query.authenticated,
  };
}
export default userBuilder;
