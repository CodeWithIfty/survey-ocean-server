const { text } = require("express");
const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  vote: {
    type: Number,
    default: 0,
  },
  pollQuestion: {
    type: String,
    required: true,
  },
  pollOptions: {
    type: [String], // Array of strings
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  deadline: {
    type: Date,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users", // Reference to the User model
  },
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users", // Reference to the User model
      },
      comment: {
        type: String,
      },
      user_name: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  reports: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users", // Reference to the User model
      },
      report_message: {
        type: String,
      },
      user_name: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  adminReports: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users", // Reference to the User model
      },
      report_message: {
        type: String,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  survey_response: [
    {
      respondedUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
      },
      responses: [
        {
          questionName: {
            type: String,
            required: true,
          },
          selectedOption: {
            type: String,
            required: true,
          },
        },
      ],
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  polledBy: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users", // Reference to the User model
      },
      selectedOption: {
        type: String,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  likedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users", // Reference to the User model
    },
  ],
  dislikedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users", // Reference to the User model
    },
  ],
  questions: [
    {
      text: {
        type: String,
        required: true,
      },
      options: {
        type: [String], // Array of strings
        required: true,
      },
    },
  ],
  isPublished: {
    type: Boolean,
    default: true, // By default, surveys are unpublished
  },
});

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
