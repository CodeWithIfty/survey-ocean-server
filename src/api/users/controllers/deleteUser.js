const Users = require("../../../models/Users");

const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const deletedUser = await Users.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { deleteUser };
