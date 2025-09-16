import userModel from "../models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; 

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const userData ={
            name,
            email,
            password: hashedPassword
        };
        const newUser = new userModel(userData);
        const User = await newUser.save();
     const token = jwt.sign({ id: User._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({ success: true, message: "User registered successfully", token, User: {name: user.name  } });
    } catch (error) {
        console.error("Error in registerUser:", error);
        res.json({ success: false, message: "Server error" });
    }
};