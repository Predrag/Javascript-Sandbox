const express = require('express');
const emails = require("../fixtures/emails");
emailRouter = express.Router();

let getEmailsRoute = (req, res) => {
    res.send(emails);
};
let getEmailRoute = (req, res) => {
    let email = emails.find(email => email.id === req.params.id)
    res.send(email);
};

emailRouter.get('/', getEmailsRoute);
emailRouter.get('/:id', getEmailRoute)

module.exports = emailRouter;