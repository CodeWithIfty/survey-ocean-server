const Payments = require("../../../models/Payments");

const postPaymentInfo = async (req, res) => {
  const { user_email, user_name, trans_id, trans_amount } = req.body;

  try {
    const newPayment = new Payments({
      user_email,
      user_name,
      trans_id,
      trans_amount,
    });

    const savedPayment = await newPayment.save();

    res.status(201).json({ message: "Payment created", payment: savedPayment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postPaymentInfo;
