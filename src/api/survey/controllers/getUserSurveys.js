const Survey = require("../../../models/Survey");

const getUserSurveys = async (req, res) => {
  const { userId } = req.params; // Extracting the userID from the request parameters

  try {
    const userSurveys = await Survey.find({ author: userId }); // Find surveys where author matches the given userID

    res.json(userSurveys);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getUserSurveys;
