
import express from 'express';
import morgan from 'morgan';
import compress from 'compression';
import userRouter from './routes/user';
import emailRouter from './routes/email';
import basicAuth from './lib/auth/auth';

const app = express();
const port = 3000;

app.use(morgan('tiny'));
app.use(compress());
app.use(basicAuth);
app.use('/emails', emailRouter);
app.use('/users', userRouter);
app.listen(port, () => {
	console.log('Express listening on port: ', port);
});

module.exports = app;
