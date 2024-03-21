const express = require('express');
const app = express();
const path = require('path');
/**
 * Express application serving static files from the "public" directory
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */

function staticFileServer(req, res) {
    // Your implementation here
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
}

app.use(staticFileServer);

const port = 7000;
app.listen(port, () => console.log(`Server is running on port ${port}`));