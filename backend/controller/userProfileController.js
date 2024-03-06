const User = require("../model/user.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secretKey = process.env.TOKEN_SECRET_KEY

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid Credentials' });
        }

        const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

        res.cookie('authorization', token, { httpOnly: true, maxAge: 3600000 });  //for 1hour in milliseconds

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const createUser = async (req, res) => {
    const { name, userName, email, password } = req.body
    console.log(req.body);

    if (!!!name && !!!userName && !!!email && !!!password) {
        res.status(400).json({ message: "Incomplete Data" })
    }

    try {

        const existingUser = await User.findOne({ email })

        if (existingUser) { res.status(400).json({ message: "User Exists" }) }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, userName, email, password: hashedPassword })

        await newUser.save()

        const token = jwt.sign({ userId: newUser._id }, secretKey, { expiresIn: '1h' });

        res.cookie('authorization', token, { httpOnly: true, maxAge: 3600000 });  //for 1hour in milliseconds

        res.status(200).json({ message: "User Saved successfully" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is some server error", error })
    }
}

const getUser = (req, res) => {
    const user = req.user
    res.status(200).json(user)
}

module.exports = {
    login,
    createUser,
    getUser
}