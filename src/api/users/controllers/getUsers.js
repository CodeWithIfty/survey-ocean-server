const Users = require("../../../models/Users");

const getUsers = async (req, res) => {
  try {
    const users = await Users.find().sort({ timestamp: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getUsers;
