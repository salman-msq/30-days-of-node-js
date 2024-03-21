const express = require('express');
const app = express();

app.use(express.json());

function loggingMiddleware(req, res, next) {
    // Your implementation here
    console.log('Request Timestamp:', new Date().toISOString());
    console.log('HTTP Method:', req.method);
    console.log('Request URL:', req.url);
    console.log('Request Headers: ', req.headers);
    console.log('Request Body:', req.body);

    next();
}

app.use(loggingMiddleware);
app.get('/', (req, res) => {
    res.send('Checking log status.');
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => { console.log(`Server is running on PORT ${PORT}`); });