const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    user_email: {
      type: String,
      required: true,
    },
    user_name: {
      type: String,
      required: true,
    },
    user_photo: {
      type: String,
      required: true,
    },
    user_role: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at" } }
); // This line adds the createdAt field

const Users = model("Users", UserSchema);

module.exports = Users;
