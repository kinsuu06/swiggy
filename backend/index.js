import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import restaurantRoutes from './routes/restaurant.route.js';

dotenv.config();

const app = express();
restaurantRoutes(app);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("DB connected");
})
.catch((err) =>{
    console.log("Error in DB", err)
})

const PORT = 8080;

app.get('/',(req,res)=>{
    res.send("hlooo")
})
app.listen(PORT, ()=>{
    console.log(`server connected at ${PORT}`)
})