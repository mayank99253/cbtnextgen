import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

const adminAuth = async (req, res, next) => {
  try {
    // 1. Header se token nikalna (Bearer token format)
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ 
        success: false, 
        message: "No token provided, access denied" 
      });
    }

    // 2. Token ko verify karna (JWT_SECRET aapki .env file mein honi chahiye)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Database mein Admin ko dhoondna ID ke basis par
    const admin = await Admin.findById(decoded.id).select("-password");

    if (!admin) {
      return res.status(401).json({ 
        success: false, 
        message: "Admin not found or invalid session" 
      });
    }

    // 4. Request mein admin object attach karna
    req.admin = admin;

    // Safety: Kuch controllers req.user dhoondte hain, isliye ye bhi set kar dete hain
    req.user = {
      id: admin._id,
      role: 'admin',
      name: admin.name
    };

    next(); // Agle step (Controller) par bhej do
  } catch (error) {
    console.error("Admin Auth Error:", error.message);
    return res.status(401).json({ 
      success: false, 
      message: "Session expired or invalid token" 
    });
  }
};

export default adminAuth;