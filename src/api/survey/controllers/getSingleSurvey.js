const Survey = require("../../../models/Survey");

const getSingleSurvey = async (req, res) => {
  try {
    const survey = await Survey.findById(req.params.id);
    if (!survey) {
      return res.status(404).json({ message: "Survey not found" });
    }
    res.json(survey);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getSingleSurvey;
