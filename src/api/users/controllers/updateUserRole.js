const Users = require("../../../models/Users");

const updateUserRole = async (req, res) => {
  const { userId, newRole } = req.body;

  try {
    const updatedUser = await Users.findByIdAndUpdate(
      userId,
      { user_role: newRole },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { updateUserRole };
