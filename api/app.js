require('dotenv').config();
const express = require('express');
const { body, validationResult } = require('express-validator');
const cors = require('cors');

const logger = require('./utils/logger');
const { createContact } = require('./utils/hubspot');


const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/**
 * Subscribe endpoint
 */
app.post('/subscribe',
body('email').isEmail(),
async (req, res, next) => {
    const err = validationResult(req);
    console.log(req.body)
    if(!err.isEmpty()) {
        return res.status(400).json({ message: "Invalid parameter(s)", errors: err.array() });
    }

    logger.info(`Received POST /subscriber -- email: ${req.body.email}`);
    await createContact(req.body.email);
    res.status(201).json({message: "success"});
});

app.listen(PORT, () => {
    logger.info(`Server listening on ${PORT}`);
});