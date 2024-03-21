const express = require('express');
const app = express();

function greetHandler(req, res) {
    // Your implementation here
    const name = req.query.name || 'Guest';
    res.send(`Hello, ${name}!`);
}

app.get('/greet', greetHandler);

const port = 7000;
app.listen(port, () => console.log(`Server is running on port ${port}`));