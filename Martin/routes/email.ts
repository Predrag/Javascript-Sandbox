import express, {Request, Response} from 'express';
import {emails} from '../fixtures/emails-data';

const emailRouter = express.Router();


const getEmailsRoute = (req: Request, res: Response) => {
	res.send(emails);

};
const getEmailRoute = (req: Request, res: Response) => {
	const email = emails.find(emailId => emailId.id === req.params.id);
	res.send(email);
};

emailRouter.get('/', getEmailsRoute);
emailRouter.get('/:id', getEmailRoute);
export default emailRouter;