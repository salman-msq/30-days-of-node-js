const jwt = require('jsonwebtoken');
/**
 * Authentication middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function authenticationMiddleware(req, res, next) {
    // Your implementation here
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json('Unauthorized');
    }

    try {
        req.user = jwt.verify(token, 'SECRET_KEY');
        next();
    } catch (error) {
        return res.status(401).json('Unauthorized');
    }
}