import express from 'express';
import cors from 'cors'
import authRoutes from './routes/auth.route.js'
import { connectDB } from './lib/db.js';
import { ENV } from './lib/env.js';
import resultRouter from './routes/resultRoutes.js';
import adminRoutes from "./routes/adminRoutes.js";

const app = express()

const PORT = ENV.PORT || 3000;

//Midlleware
app.use(cors())
app.use(express.json()) //req.body
app.use(express.urlencoded({ extended:true}))

//DB
connectDB();

//Routes
app.use('/api/auth',authRoutes)
app.use('/api/results',resultRouter)
app.use("/api/admin", adminRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'API is working' });
});


app.listen(PORT, () => {
    console.log("server running on PORT" + PORT)
})