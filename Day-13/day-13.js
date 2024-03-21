const express = require('express');
const ws = require('ws');
const http = require('http');

const app = express();
const server = http.createServer(app);

function setupWebSocket(server) {
    // Your implementation here
    const webs = new ws.Server({ server });

    webs.on('connection', (ws) => {
        console.log('Client connected.');

        ws.on('message', (message) => {
            console.log(`Received message: ${message}`);
            ws.send(`Echo: ${message}`);
        });

        ws.on('close', () => {
            console.log('Client disconnected');
        });
    });
};

setupWebSocket(server);

app.get('/websocket', (req, res) => {
    res.sendFile(__dirname + '/websocket.html');
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => { console.log(`Server is running on PORT ${PORT}`); });