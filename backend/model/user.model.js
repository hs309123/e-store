const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }]

}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
