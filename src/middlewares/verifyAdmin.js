const Users = require("../models/Users");

const verifyAdmin = async (req, res, next) => {
  const email = req.user.email;
  // console.log(email);
  const query = { user_email: email };

  try {
    const user = await Users.findOne(query);

    if (!user || user.user_role !== "admin") {
      return res.status(403).json({ message: "Forbidden access" });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = verifyAdmin;
