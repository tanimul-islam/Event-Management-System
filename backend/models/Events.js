const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    title:{type:String, required:true},
    desctiption:{type:String, required:true},
    location: {type:String, required:true},
    date:{type: Date, required:true},
    time: {type:String, required:true},
    createdBy:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    attendees: [{type:mongoose.Schema.Types.ObjectId, ref:"User"}],
    },{timestamp: true}
);

module.exports = mongoose.model("Event", eventSchema)