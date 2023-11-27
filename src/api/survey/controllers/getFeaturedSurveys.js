const Survey = require("../../../models/Survey");

const getLatestPublishedSurveys = async (req, res) => {
  try {
    const latestSurveys = await Survey.find({ isPublished: true })
      .sort({ timestamp: -1 })
      .limit(6);

    res.status(200).json({ surveys: latestSurveys });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getLatestPublishedSurveys };
