import UserModel from "../models/User.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const signUp = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password) {
            return res.status(400).send("All fields are required");
        }
        const existingUser = await UserModel.findOne({ email });
        if(existingUser) {
            return res.status(400).send("User already exists");
        }
        
        const newUser = await UserModel.create(req.body);
        return res.status(201).json(newUser);
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).send("Internal Server Error");
    }
};

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(400).send("All fields are required");
        }
        const user = await UserModel.findOne({ email });
        if(!user) {
            return res.status(404).send("User not found");
        }
        const isMatch = await user.comparePassword(password);
        if(!isMatch) {
            return res.status(401).send("Invalid credentials");
        }
        const token = jwt.sign({ email }, "0000", { expiresIn: '1h' });
        return res.status(200).json({message: "Login successful", token, user});
    } catch (error) {
        console.error("Error logging in user:", error);
        return res.status(500).send("Internal Server Error");
    }
}