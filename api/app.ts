import express from 'express';
import morgan from 'morgan';
import compress from 'compression';
import mongoSanitize from 'express-mongo-sanitize';
import bodyParser from 'body-parser';
import userRouter from './routes/user.router';

const port = 3000;
const app = express();
const jsonParser = bodyParser.json({ limit: '1mb' });
app.use(mongoSanitize());
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(compress());

app.get('/', (req, res) => {
  res.render('index');
});
app.use('/users', jsonParser, userRouter);
app.get('*', (req, res) => {
  res.send('Non existing route');
});
app.listen(port, () => {
  console.log('Express listening on port: ', port);
});

module.exports = app;
