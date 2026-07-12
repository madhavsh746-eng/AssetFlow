const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// Register
exports.registerUser = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        // Validate input
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            success: true,
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message,
        });

    }
};

// Login
exports.loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }

        const user = await User.findOne({ email });

        if (user && await bcrypt.compare(password, user.password)) {

            return res.status(200).json({
                success: true,
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            });

        }

        return res.status(401).json({
            success: false,
            message: "Invalid Credentials",
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message,
        });

    }

};