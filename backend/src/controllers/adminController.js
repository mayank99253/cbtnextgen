import Admin from "../models/Admin.js";
import Result from '../models/resultModel.js'
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const adminRegister = async (req, res) => {
    try {
        const { admin_name, email, password } = req.body;

        const adminExists = await Admin.findOne({ email });
        if (adminExists) {
            return res.status(400).json({ message: "Admin already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = await Admin.create({
            admin_name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            message: "Admin registered successfully",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: admin._id, role: admin.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // true in production
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        }).json({
            token,
            admin: {
                id: admin._id,
                admin_name: admin.admin_name,
                email: admin.email,
            },
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const adminLogout = (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0), // Expire the cookie immediately
    });
    return res.status(200).json({
        message: "Admin logged out successfully",
    });
};
export const getAllLanguages = async (req, res) => {
    try {
        const languages = await Result.distinct("language");

        res.json({
            admin: req.admin.admin_name,
            totalLanguages: languages.length,
            languages,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const getLanguageResults = async (req, res) => {
    try {
        const { language } = req.params;

        const results = await Result.find({ language })
            .populate("user", "name email")
            .sort({ score: -1 });

        const rankedResults = results.map((item, index) => ({
            rank: index + 1,
            name: item.user.name,
            email: item.user.email,
            score: item.score,
            percentage: item.percentage,
            createdAt: item.createdAt,
        }));

        res.json({
            language,
            totalStudents: rankedResults.length,
            results: rankedResults,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
