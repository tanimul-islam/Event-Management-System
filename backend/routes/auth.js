const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/Users");
const router = express.Router();

router.post("/register", async (req,res) => {
    const {name,email, password, role} = req.body;
    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "Email already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword,
            role: role || "Attendee"
        });

        await user.save();

        res.status(201).json({message:"User registered successfully"});
    }catch(err){
        res.status(500).json({message: "Server error", error: err.message});
    }
});

module.exports = router;