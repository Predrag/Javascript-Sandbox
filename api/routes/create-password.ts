import express, { NextFunction, Request, Response } from 'express';

const createPassword = express.Router();

export let generatedPassword;
export const getGeneratePassword = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const payload = `${req.body.username}:${req.body.password}`;
    generatedPassword = Buffer.from(payload).toString('base64');
    if (req.header('Content-Type') === 'application/json') {
        res.end(JSON.stringify(generatedPassword, null, 2));
    } else {
        next();
    }
    // return generatedPassword;
};
createPassword.post('/', getGeneratePassword);
export default createPassword;
