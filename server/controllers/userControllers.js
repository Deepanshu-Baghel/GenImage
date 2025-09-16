import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
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
        res.json({ success: true, message: "User registered successfully", token, User: {name: User.name  } });
    } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({ success: false, message: error.message });
}

};

const loginUser = async (req , res) => {
    try{
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if(!user){
            return res.json({ success: false , message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.json({ success: false , message: 'Invalid credentials' });
        } else {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
            res.json({ success: true, message: "Login successful", token, User: { name: user.name } });
        }

    } catch(error){
        console.error("Error in loginUser:", error);
        res.json({ success: false, message: " UCL Server error" });
    }
}

const userCredits = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.json({ success: true, credits: user.creditBalance, message: "Credits fetched successfully" ,user: { name: user.name } });

    } catch (error) {
        console.error("Error in userCredits:", error);
        res.status(500).json({ success: false, message: "UCL Server error" });
    }
};

export { registerUser, loginUser, userCredits };