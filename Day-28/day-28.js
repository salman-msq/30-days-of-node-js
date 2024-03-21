const express = require('express');
const ws = require('ws');
const app = express();

function setupWebSocketServer(server) {
    // Your implementation here
    const wss = new ws.Server({ server });

    wss.on('connection', (w) => {
        console.log('New Client is Connected');

        w.on('message', (message) => {
            console.log('Received:', message);

            wss.clients.forEach((client) => {
                if (client !== w && client.readyState === ws.OPEN) {
                    client.send(message);
                }
            });
        });

        w.on('close', () => console.log('Cleint is diconnected.'));
    });
}

app.get('/', (req, res) => console.log('Server is running.'));

const server = require('http').createServer(app);
const PORT = 7000;
server.listen(PORT, () => {
    console.log('Server is running on PORT', PORT);
    setupWebSocketServer(server);
})