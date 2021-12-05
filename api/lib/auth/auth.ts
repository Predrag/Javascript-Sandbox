import { Request, Response, NextFunction } from 'express';
import { users } from '../../fixtures/users-data';
import { comparePassword } from './hash-password';

const basicAuth = (findUserByCredentials) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const header = req.headers.authorization || '';
        const [type, payload] = header.split(' ');
        console.log(type, payload);

        if (type === 'Basic' && payload !== undefined) {
            const credentials = Buffer.from(payload, 'base64').toString(
                'ascii'
            );
            console.log('Credentials', credentials);
            const [username, password] = credentials.split(':');
            const UserObject = users.find((user) => {
                return user.username === username;
            });
            if (UserObject) {
                const encodeHash = await comparePassword(
                    password,
                    UserObject.password
                );
                if (encodeHash) {
                    findUserByCredentials(UserObject);
                    next();
                } else {
                    console.log('Bad password of username');
                    res.sendStatus(401);
                    return;
                }
            } else {
                console.log('Bad password of username');
                res.sendStatus(401);
                return;
            }
        } else {
            res.sendStatus(401);
        }
    };
};

export default basicAuth;
