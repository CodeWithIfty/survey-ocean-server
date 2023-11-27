const Payments = require("../../../models/Payments");

const getAllPayments = async (req, res) => {
  try {
    const payments = await Payments.find();
    res.status(200).json({ payments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllPayments;
