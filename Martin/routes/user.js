const express = require('express');
const users = require("../fixtures/users");
let userRouter = express.Router()

let getUsersRoute = (req, res) =>{
    res.send(users);
};

let getUserRoute = (req, res) => {
    let user = users.find(user => user.id === req.params.id)
    res.send(user);
};

userRouter.get('/', getUsersRoute);
userRouter.get('/:id',getUserRoute);

module.exports = userRouter;