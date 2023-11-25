const Survey = require("../../../models/Survey");

const postComment = async (req, res) => {
  const { userId, surveyId, userName, commentText } = req.body;

  try {
    let survey = await Survey.findById(surveyId);

    if (!survey) {
      return res.status(404).json({ message: "Survey not found" });
    }

    const newComment = {
      user: userId,
      comment: commentText,
      user_name: userName,
    };

    survey.comments.push(newComment);
    await survey.save();

    res.status(200).json({ message: "Comment posted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postComment;
