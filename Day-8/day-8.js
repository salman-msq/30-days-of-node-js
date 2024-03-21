const express = require('express');
const app = express();

/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function positiveIntegerHandler(req, res) {
    // Your implementation here
    const para = req.query.number;
    if (isNaN(para) || parseInt(para) <= 0) {
        res.status(400).send('Error');
    }

    res.status(200).send('Success');
}

app.use(positiveIntegerHandler);
app.get('/positive');

const port = 7000;
app.listen(port, () => console.log(`Server is running on port ${port}`));