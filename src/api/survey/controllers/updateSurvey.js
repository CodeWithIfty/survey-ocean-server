const Survey = require("../../../models/Survey");

const updateSurvey = async (req, res) => {
  const { surveyId } = req.params;
  const updateFields = req.body; // Fields to be updated
  // console.log(updateFields);

  try {
    const survey = await Survey.findById(surveyId);

    if (!survey) {
      return res.status(404).json({ message: "Survey not found" });
    }

    // Update only the specified fields
    Object.keys(updateFields).forEach((key) => {
      survey[key] = updateFields[key];
    });

    await survey.save();

    res.status(200).json({ message: "Survey updated successfully", survey });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { updateSurvey };
