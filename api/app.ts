import express from 'express';
import morgan from 'morgan';
import compress from 'compression';
import mongoSanitize from 'express-mongo-sanitize';
import bodyParser from 'body-parser';
import userRouter from './routes/user.router';
import HttpException from './exceptions/HttpException';
import env from './config/env';

const { PORT } = env;
const app = express();
const jsonParser = bodyParser.json({ limit: '1mb' });
app.use(jsonParser);
app.use(bodyParser.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
	if (err instanceof SyntaxError) {
		res.status(400).json({ message: new HttpException(400, 'Bad Json format').message });
	}
});
app.set('view engine', 'pug');
app.use(mongoSanitize());
app.use(morgan('combined'));
app.use(compress());

app.get('/', (req, res) => {
	res.render('index');
});
app.use('/users', userRouter);
app.get('*', (req, res) => {
	res.send('Non existing route');
});
app.listen(PORT || 3000, () => {
	console.log('Express listening on port: ', PORT);
});

module.exports = app;
