const Survey = require("../../../models/Survey");

const updateLikeDislike = async (req, res) => {
  const { userId, surveyId, action } = req.body;

  try {
    let survey = await Survey.findById(surveyId);

    if (!survey) {
      return res.status(404).json({ message: "Survey not found" });
    }

    // Check if the user has already performed the action
    if (action === "like" || action === "dislike") {
      if (
        survey.likedBy.includes(userId) ||
        survey.dislikedBy.includes(userId)
      ) {
        return res
          .status(400)
          .json({ message: "User has already performed this action" });
      }
    }

    if (action === "like") {
      survey.likes++;
      survey.likedBy.push(userId);
    } else if (action === "dislike") {
      survey.dislikes++;
      survey.dislikedBy.push(userId);
    } else {
      return res.status(400).json({ message: "Invalid action" });
    }

    await survey.save();

    res.status(200).json({ message: "Action updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateLikeDislike;
