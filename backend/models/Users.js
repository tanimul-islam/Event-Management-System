const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type:String, required: true, unique: true},
    password: {type:String, required: true},
    role:{type: String, enum:["Admin","Attendee"], default:"Attendee"},

    }, {timestamps: true});

module.exports = mongoose.model("User", userSchema);