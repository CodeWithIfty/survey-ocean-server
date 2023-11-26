const Survey = require("../../../models/Survey");

const postReport = async (req, res) => {
  const { userId, surveyId, userName, report_message } = req.body;

  try {
    let survey = await Survey.findById(surveyId);

    if (!survey) {
      return res.status(404).json({ message: "Survey not found" });
    }

    const newReport = {
      user: userId,
      report_message: report_message,
      user_name: userName,
    };

    survey.reports.push(newReport);
    await survey.save();

    res.status(200).json({ message: "Report posted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postReport;
