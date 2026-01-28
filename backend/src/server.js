import express from 'express';

import authRoutes from './routes/auth.route.js'
import { connectDB } from './lib/db.js';
import { ENV } from './lib/env.js';

const app = express()

const PORT = ENV.PORT || 3000;

app.use(express.json()) //req.body
app.use('/api/auth',authRoutes)


app.listen(PORT, () => {
    console.log("server running on PORT" + PORT)
    connectDB();
})