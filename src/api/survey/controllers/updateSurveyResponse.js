const Survey = require("../../../models/Survey");

const updateSurveyResponse = async (req, res) => {
  const { surveyId, userId, responses } = req.body;

  try {
    // Find the survey by ID
    const survey = await Survey.findById(surveyId);

    if (!survey) {
      return res.status(404).json({ error: "Survey not found" });
    }

    // Check if the user has already responded to this survey
    const existingResponseIndex = survey.survey_response.findIndex(
      (response) => response.respondedUser.toString() === userId
    );

    if (existingResponseIndex !== -1) {
      return res
        .status(400)
        .json({ error: "User has already responded to this survey" });
    }

    survey.survey_response.push({
      respondedUser: userId,
      responses,
    });

    // Save the updated survey
    await survey.save();

    res.status(200).json({ message: "Survey response updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  updateSurveyResponse,
};
