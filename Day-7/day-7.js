const express = require('express');
const app = express();

/**
 * Express middleware to log incoming requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function requestLoggerMiddleware(req, res, next) {
    // Your implementation here
    const time_stamp = new Date().toISOString();
    console.log(`${time_stamp} - ${req.method} request received.`);
    next();
}
app.use(requestLoggerMiddleware);
app.get('/', (req, res) => {
    res.send('Server is Working.');
});

const port = 7000;
app.listen(port, () => console.log(`Server is running on port ${port}`));