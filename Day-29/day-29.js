const express = require('express');
const app = express();

function errorHandler(err, req, res, next) {
    // Your implementation here
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
}



app.get('/', (req, res) => {
    res.send('Hello, Server is running.');
})

app.get('/error', (req, res, next) => {
    next(new Error());
})

app.use(errorHandler);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log('Server is running on PORT', PORT));