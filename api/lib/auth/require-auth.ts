const requestAuth = (req, res, next) => {
    if (req.headers.authorization) {
        console.log('Authorization OK');
        next();
    } else {
        console.log('Authorization is required');
        res.status(401).send('You have forgotten to authorize');
    }
};

export default requestAuth;
