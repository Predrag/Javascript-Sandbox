import express from 'express';
import morgan from 'morgan';
import compress from 'compression';
import bodyParser from 'body-parser';
import userRouter from './routes/user.router';
import emailRouter from './routes/email';
import basicAuth from './lib/auth/auth';
import createPassword, { generatedPassword } from './routes/create-password';
import requestAuth from './lib/auth/require-auth';
import findUserByCredentials from './lib/dao/find-user';

const app = express();
app.set('view engine', 'pug');
const port = 3000;
const jsonParser = bodyParser.json();

app.get('/', function (req, res) {
	res.render('index');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(compress());
app.use('/login', jsonParser, createPassword, (req, res) => { res.render('sendPassword', { title: 'Password', password: generatedPassword }); });
app.use(requestAuth);
app.use(basicAuth(findUserByCredentials));
app.use('/emails', emailRouter);
app.use('/users', userRouter);
app.get('*', function (req, res) {
	res.send('Non existing route');
});
app.listen(port, () => {
	console.log('Express listening on port: ', port);
});

module.exports = app;
