import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import { ENV } from '../lib/env.js';

export default async function authMiddleware(req, res, next) {
    // 1. FIX: Use req.headers (plural) or req.header('Authorization')
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            success: false,
            message: "Not Authorized, token missing",
        });
    }

    // Extract the actual token string
    const token = authHeader.split(' ')[1];

    try {
        // 2. FIX: Pass 'token', not 'generateToken'
        const payload = jwt.verify(token,ENV.JWT_SECRET);

        // 3. LOGIC CHECK: Make sure your login code uses 'userId' in the payload
        const user = await User.findById(payload.userId).select("-password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found",
            });
        }

        req.user = user;
        next();
    } catch (err) {
        console.error('JWT VERIFICATION FAILED', err.message);
        return res.status(401).json({
            success: false,
            message: "Not Authorized, token failed",
        });
    }
}