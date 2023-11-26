const Survey = require("../../../models/Survey");

const getFilteredSurveys = async (req, res) => {
  const { category, sortByLikeDislike, sortByVote, searchTerm } = req.query;

  try {
    let query = { isPublished: true }; // Include query for published surveys

    if (category) {
      query.category = category;
    }

    let sortOption = {};

    if (sortByLikeDislike === "mostLiked") {
      sortOption = { likes: -1 };
    } else if (sortByLikeDislike === "mostDisliked") {
      sortOption = { dislikes: -1 };
    } else if (sortByVote === "mostVoted") {
      sortOption = { "polledBy.length": -1 }; // Replace "vote" with the correct field
    }

    if (searchTerm) {
      query.title = { $regex: new RegExp(searchTerm, "i") };
    }

    const filteredSurveys = await Survey.find(query).sort(sortOption);

    res.status(200).json({ surveys: filteredSurveys });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getFilteredSurveys };
