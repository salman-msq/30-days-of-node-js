const express = require('express');
const app = express();

const window = 60000;
const rateLimit = 3;
const requests = {};
function rateLimitMiddleware(req, res, next) {
    // Your implementation here
    const ip = req.ip;

    if (requests.ip && Date.now() - requests.ip.timeStamp < window) {
        requests.ip.count++;
    } else {
        requests.ip = { count: 1, timeStamp: Date.now() };
    }

    if (requests.ip.count > rateLimit) {
        res.status(429).send('Too Many Requests...');
    }

    next();
};

app.use(rateLimitMiddleware);
app.get('/', (req, res) => {
    res.send("Hi, Server is Working but the limit of the number of requests from a single IP address is 3 per minute.");
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => { console.log(`Server is running on PORT ${PORT}\n\n`); });