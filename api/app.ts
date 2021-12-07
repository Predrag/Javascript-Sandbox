import express from 'express';
import morgan from 'morgan';
import compress from 'compression';
import bodyParser from 'body-parser';
import userRouter from './routes/user.router';

const app = express();
app.set('view engine', 'pug');
const port = 3000;
const jsonParser = bodyParser.json();
app.get('/', (req, res) => {
  res.render('index');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(compress());
app.use('/users', jsonParser, userRouter);
app.get('*', (req, res) => {
  res.send('Non existing route');
});
app.listen(port, () => {
  console.log('Express listening on port: ', port);
});

module.exports = app;
