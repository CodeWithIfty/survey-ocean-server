const Users = require("../../../models/Users");

const getUserRole = async (req, res, next) => {
  try {
    const email = req.params.email;
    const query = { user_email: email };
    const result = await Users.findOne(query);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = getUserRole;
