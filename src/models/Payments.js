const { Schema, model } = require("mongoose");

const PaymentSchema = new Schema(
  {
    user_email: {
      type: String,
      required: true,
    },
    user_name: {
      type: String,
      required: true,
    },
    trans_id: {
      type: String,
      required: true,
    },
    trans_amount: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at" } }
); // This line adds the createdAt field

const Payments = model("Payments", PaymentSchema);

module.exports = Payments;
