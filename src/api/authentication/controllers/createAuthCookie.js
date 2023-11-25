const createToken = require("../../../lib/authentication/createToken");

const createAuthCookie = (req, res, next) => {
  try {
    const user = req.body;
    const token = createToken(user);

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      })
      .send({ success: true });
  } catch (err) {
    next(err);
  }
};

module.exports = createAuthCookie;
