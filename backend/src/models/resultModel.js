import mongoose from "mongoose";

const performanceEnum = [
  "Excellent",
  "Good",
  "Average",
  "Needs Work",
];

const resultSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, // User ID honi hi chahiye dashboard ke liye
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    technology: {
      type: String,
      required: true,
      trim: true,
      lowercase: true, // Consistency ke liye lowercase
      enum: [
        "html", "css", "js", "react", "node", "mongodb",
        "java", "python", "cpp", "bootstrap",
      ],
    },

    level: {
      type: String,
      required: true,
      enum: ["basic", "intermediate", "advanced"],
    },

    totalQuestions: {
      type: Number,
      required: true,
      min: 0,
    },

    correct: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },

    wrong: {
      type: Number,
      min: 0,
      default: 0,
    },

    score: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },

    performance: {
      type: String,
      enum: performanceEnum,
      default: "Needs Work",
    },

    // 🔥 Naya Feature: Har sawal ka jawab yahan store hoga
    responses: [
      {
        questionText: { type: String, required: true },
        selectedOption: { type: String, required: true },
        correctOption: { type: String, required: true },
        isCorrect: { type: Boolean, required: true },
      }
    ],
  },
  {
    timestamps: true,
  }
);

//
// 🔥 COMPUTE SCORE & PERFORMANCE BEFORE SAVE
//
resultSchema.pre("save", function (next) {
  const total = Number(this.totalQuestions) || 0;
  const correct = Number(this.correct) || 0;

  // 1. Calculate Score
  this.score = total ? Math.round((correct / total) * 100) : 0;

  // 2. Calculate Performance based on score
  if (this.score >= 85) this.performance = "Excellent";
  else if (this.score >= 65) this.performance = "Good";
  else if (this.score >= 45) this.performance = "Average";
  else this.performance = "Needs Work";

  // 3. Auto-calculate wrong answers
  this.wrong = Math.max(0, total - correct);

  next();
});

const Result = mongoose.models.Result || mongoose.model("Result", resultSchema);

export default Result;