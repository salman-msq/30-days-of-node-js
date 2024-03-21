const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

function authenticateAndAuthorize(req, res, next) {
    // Your implementation here
    const token = req.headers['authorization'];

    if (!token) {
        res.status(401).json({ message: 'Access denied. No token provided' });
    }

    const decoded = jwt.verify(token, 'SECRET_KEY');
    if (!decoded) {
        res.status(401).json({ message: 'Invalid Token' });
    }

    if (decoded.role !== 'admin') {
        res.status(403).json({ message: 'Access denied. You do not have the required role.' });
    }

    req.user = decoded;
    next();
}