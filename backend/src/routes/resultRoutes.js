import express from 'express'
import authMiddleware from '../middleware/auth.middleware.js'
import adminAuth from '../middleware/adminauth.js' // 1. Admin Auth import karo
import { 
    createResult, 
    listResults, 
    listAllResultsForAdmin // 2. Naya controller function add karo
} from '../controllers/resultController.js';

const resultRouter = express.Router();

// ---------- STUDENT ROUTES ----------
resultRouter.post('/', authMiddleware, createResult);
resultRouter.get('/', authMiddleware, listResults);

// ---------- ADMIN ROUTES ----------
// Ye route specifically admin dashboard ke liye hai
resultRouter.get('/admin/all', adminAuth, listAllResultsForAdmin);

export default resultRouter;