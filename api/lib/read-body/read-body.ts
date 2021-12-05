import { Request } from 'express';

const readBody = (req: Request) => {
    return new Promise<string>((resolve) => {
        const chunks = [];
        req.on('data', (chunk) => {
            chunks.push(chunk);
        });
        req.on('end', () => {
            resolve(Buffer.concat(chunks).toString());
        });
    });
};

export default readBody;
