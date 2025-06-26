import express from 'express';
import dotenv from 'dotenv';
import RestaurantRoutes from './routes/Restaurant.route.js';
import UserRoutes from './routes/User.route.js';
import mongoose, { mongo } from 'mongoose';

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.error("Error connecting to MongoDB:", err);
});

app.use("/restaurants",RestaurantRoutes);
app.use("/users", UserRoutes);

const PORT = process.env.PORT || 3000;
app.get('/', (req,res)=>{
    res.send("hello world");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})