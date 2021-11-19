const express = require('express');
const userRouter = require('./routes/user');
const emailRouter = require('./routes/email');

let app = express();
const port = 3000;


app.use('/emails', emailRouter);
app.use('/users', userRouter);
app.listen(port)
console.log('Express listening on port: ', port)