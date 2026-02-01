import Result from "../models/resultModel.js";

// ===============================
// CREATE RESULT
// ===============================
export async function createResult(req, res) {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({
                success: false,
                message: "Not authorized",
            });
        }

        const {
            title,
            technology,
            level,
            totalQuestions,
            correct,
            wrong,
        } = req.body;

        if (
            !technology ||
            !level ||
            totalQuestions === undefined ||
            correct === undefined
        ) {
            return res.status(400).json({
                success: false,
                message: "Missing fields",
            });
        }


        // compute wrong if not provided
        const computedWrong =
            wrong !== undefined
                ? Number(wrong)
                : Math.max(0, Number(totalQuestions) - Number(correct));
                
        if (!title) {
            return res.status(400).json({
                success: false,
                message: "Missing Title",
            });
        }
        const payload = {
            title: String(title).trim(),
            technology,
            level,
            totalQuestions: Number(totalQuestions),
            correct: Number(correct),
            wrong: computedWrong,
            user: req.user.id,
        };

        const created = await Result.create(payload);

        return res.status(201).json({
            success: true,
            message: "Result Created",
            result: created,
        });
    } catch (err) {
        console.error("CreateResult Error:", err);
        return res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}

// ===============================
// LIST RESULTS
// ===============================
// export async function listResults(req, res) {
//     try {
//         if (!req.user || !req.user.id) {
//             return res.status(401).json({
//                 success: false,
//                 message: "Not authorized",
//             });
//         }

//         const { technology } = req.query;

//         const query = { user: req.user.id };

//         if (technology && technology.toLowerCase() !== "all") {
//             query.technology = technology;
//         }

//         const items = await Result.find(query)
//             .sort({ createdAt: -1 })
//             .lean();

//         return res.json({
//             success: true,
//             results: items,
//         });
//     } catch (err) {
//         console.error("ListResult Error:", err);
//         return res.status(500).json({
//             success: false,
//             message: "Server Error",
//         });
//     }
// }
export async function listResults(req, res) {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ success: false, message: "Not authorized" });
        }

        const { technology } = req.query;
        let query = {};

        // AGAR USER ADMIN NAHI HAI, TO SIRF USKA DATA DIKHAO
        // Maan lete hain aapke token mein 'role' field hai
        if (req.user.role !== 'admin') {
            query.user = req.user.id;
        }

        if (technology && technology.toLowerCase() !== "all") {
            query.technology = technology;
        }

        // .populate("user", "name email") se student ka naam bhi mil jayega
        const items = await Result.find(query)
            .populate("user", "name email") 
            .sort({ createdAt: -1 })
            .lean();

        return res.json({
            success: true,
            results: items,
        });
    } catch (err) {
        console.error("ListResult Error:", err);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
}
// resultController.js ke niche ye function add karo

export async function listAllResultsForAdmin(req, res) {
    try {
        // Query parameters se technology filter uthao (agar hai to)
        const { technology } = req.query;
        let query = {};

        // Agar admin ne specific language (HTML/CSS) select ki hai
        if (technology && technology.toLowerCase() !== "all") {
            query.technology = technology;
        }

        // Database se saare results nikaalo
        const items = await Result.find(query)
            .populate("user", "fullName email") // Yeh Student details fetch karega User model se
            .sort({ score: -1 })           // Topper ko sabse upar dikhane ke liye
            .lean();

        return res.json({
            success: true,
            count: items.length,
            results: items,
        });
    } catch (err) {
        console.error("Admin List Error:", err);
        return res.status(500).json({
            success: false,
            message: "Server Error: Unable to fetch all results",
        });
    }
}