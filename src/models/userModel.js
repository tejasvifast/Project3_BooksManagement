const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    title: { type: String, required: true, enum: ["Mr", "Mrs", "Miss"] },
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, unique: true, trim: true },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: { type: String, required: true, minlength: 8, maxlength: 15 },
    address: {
        street: { type: String, trim: true },
        city: { type: String, trim: true },
        pincode: { type: String, trim: true }
    }
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)