import express from "express";
import db from "./config/database.js";
import bookRoutes from "./routes/index.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/products', bookRoutes);

app.listen(5000, () => console.log('Server running at port 5000'));