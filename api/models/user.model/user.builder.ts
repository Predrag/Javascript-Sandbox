function userBuilder(user):object {
  return {
    _id: user.query._id,
    username: user.query.username,
    surname: user.query.surname,
    name: user.query.name,
    password: user.query.password,
    authenticated: user.query.authenticated,
  };
}
export default userBuilder;
