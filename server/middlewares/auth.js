import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';
const userAuth = async (req, res, next) => {
    try {
        let token = req.headers.token || req.headers.authorization;
        if (!token) {
            return res.status(401).json({ success: false, message: 'Not Authorized. Login Again.' });
        }

        // Remove Bearer prefix if present
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }

        console.log('Token:', token);
        console.log('JWT_SECRET:', process.env.JWT_SECRET);

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(decoded.id) {
            req.userId = decoded.id;
        }else {
            return res.status(401).json({ success: false, message: 'Not Authorized. Login Again.' });
        }
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(401).json({ success: false, message: 'Invalid auth token ' });
    }
};

export default userAuth;
