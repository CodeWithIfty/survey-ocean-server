const Survey = require("../../../models/Survey");

const getSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find({ isPublished: true }).sort({
      timestamp: -1,
    });
    res.json(surveys);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getSurveys;
