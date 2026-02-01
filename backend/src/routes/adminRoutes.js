import express from "express";
import {
  adminRegister,
  adminLogin,
  adminLogout,
  getAllLanguages,
  getLanguageResults,
} from "../controllers/adminController.js";
import adminAuth from "../middleware/adminauth.js";

const router = express.Router();

/* =========================
   AUTH ROUTES
========================= */

// Admin register
router.post("/register", adminRegister);

// Admin login
router.post("/login", adminLogin);

// Admin logout (JWT based, stateless)
router.post("/logout", adminAuth, adminLogout);


/* =========================
   DASHBOARD ROUTES
========================= */

// Dashboard → show all available languages
// Data comes directly from Result collection
router.get("/dashboard", adminAuth, getAllLanguages);

// Language-wise results + ranking
// Example: /api/admin/results/html
router.get("/results/:language", adminAuth, getLanguageResults);

export default router;
