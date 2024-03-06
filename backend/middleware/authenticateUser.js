const jwt = require('jsonwebtoken');
const User = require("../model/user.model");

const secretKey = process.env.TOKEN_SECRET_KEY

const authenticateUser = async (req, res, next) => {
    try {
        const token = req.cookies.authorization;

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        const decoded = jwt.verify(token, secretKey);

        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }

        req.user = user;

        next();
    } catch (error) {
        console.error('Error authenticating user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = authenticateUser;
