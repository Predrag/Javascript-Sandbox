import express from 'express';
import {getFloatsDoubles, getNumbers} from "../controllers/numbers.controller";

const numberRouter = express.Router();

numberRouter.get('/', getNumbers);
numberRouter.get('/float', getFloatsDoubles);

export default numberRouter;
