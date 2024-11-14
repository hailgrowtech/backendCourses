const mongoose = require('mongoose');


const videoSchema = new mongoose.Schema({
    videoUrl:{
        type:String,
        // required:true,
    },
    videoTitle:{
        type: String,
        required: true,
    },
    videoDuration: {
        type: String,
        required:true,
    },
    videoTagLine: {
        type: String,
        required:true,
    },
});


const courseSchema = new mongoose.Schema(
{
    titleImgUrl: {
        type: String,
        // required: true,
    },
    courseName: {
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    duration:{
        type:String,
        required:true,
    },
    level:{
        type: String,
        enum:['Easy','Medium','Hard'],
        required:true,
    },
    numberOfSessions:{
        type:Number,
        required:true,
    },
    channelLink:{
        type:String,
        required:true,
    },
    videos: [videoSchema],
    courseDescription:{
        type:String,
        required:true,
    },
    
},
{timestamps: true})

module.exports = mongoose.model('Course',courseSchema);