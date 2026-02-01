import express from 'express'
import authMiddleware from '../middleware/auth.middleware.js'
import adminAuth from '../middleware/adminAuth.js'
import { 
    createResult, 
    listResults, 
    listAllResultsForAdmin
} from '../controllers/resultController.js';
// bhai ab please deploy ho jaa 
const resultRouter = express.Router();

// ---------- STUDENT ROUTES ----------
resultRouter.post('/', authMiddleware, createResult);
resultRouter.get('/', authMiddleware, listResults);

// ---------- ADMIN ROUTES ----------
// Ye route specifically admin dashboard ke liye hai
resultRouter.get('/admin/all', adminAuth, listAllResultsForAdmin);

export default resultRouter;