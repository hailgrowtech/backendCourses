const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  videoUrl: {
    type: String,
  },
  videoTitle: {
    type: String,
    // required: true,
  },
  videoDuration: {
    type: String,
    // required: true,
  },
  videoTagLine: {
    type: String,
    // required: true,
  },
});

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
});

const courseSchema = new mongoose.Schema(
  {
    titleImgUrl: {
      type: String,
    },
    courseName: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      enum: ['Easy', 'Medium', 'Hard'],
      required: true,
    },
    numberOfSessions: {
      type: Number,
      required: true,
    },
    channelLink: {
      type: String,
      required: true,
    },
    videos: [videoSchema],
    courseDescription: {
      type: String,
      required: true,
    },
    users: [userSchema],
    expertId: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', courseSchema);
