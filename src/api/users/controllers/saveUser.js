const Users = require("../../../models/Users");

const saveUser = async (req, res, next) => {
  try {
    const email = req.params.email;
    const user = req.body;
    const query = { user_email: email }; // Use 'user_email' here
    const options = { upsert: true };
    const isExist = await Users.findOne(query);
    if (isExist) return res.send(isExist);

    const result = await Users.updateOne(
      query,
      {
        $set: { ...user, timestamps: Date.now() },
      },
      options
    );

    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = saveUser;
