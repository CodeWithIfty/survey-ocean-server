const Survey = require("../../../models/Survey");

const updatePublicationStatus = async (req, res) => {
  const { surveyId, isPublished } = req.body;

  try {
    let survey = await Survey.findById(surveyId);

    if (!survey) {
      return res.status(404).json({ message: "Survey not found" });
    }

    survey.isPublished = isPublished;
    await survey.save();

    res
      .status(200)
      .json({ message: "Publication status updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { updatePublicationStatus };
