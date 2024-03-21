const express = require('express');
const app = express();

const caches = {};

function cachingMiddleware(req, res, next) {
    // Your implementation here
    const url = req.url;

    if (caches.url && caches.timestamp > Date.now() - 60 * 1000) {
        console.log(`Cache response for the url ${url}`);
        return res.send(caches.url.data);
    }

    next();
}

app.use(cachingMiddleware);

app.get('/', (req, res) => {
    const url = req.url;
    caches.url = {
        data: 'Hello, It is day 14 of 30 days.',
        timestamp: Date.now()
    };

    res.send(caches.url.data);
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => { console.log(`Server is running on PORT ${PORT}`); });