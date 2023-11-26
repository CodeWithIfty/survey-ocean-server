const Survey = require("../../../models/Survey");

const postPoll = async (req, res) => {
  const { userId, surveyId, selectedOption } = req.body;

  try {
    let survey = await Survey.findById(surveyId);

    if (!survey) {
      return res.status(404).json({ message: "Survey not found" });
    }

    const newPoll = {
      user: userId,
      selectedOption: selectedOption,
    };

    survey.polledBy.push(newPoll);
    survey.vote++;
    await survey.save();

    res.status(200).json({ message: "Poll posted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postPoll;
