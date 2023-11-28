const { default: mongoose } = require("mongoose");
const Survey = require("../../../models/Survey");

const getSurveyorAnalyticsData = async (req, res) => {
  const { authorId } = req.params;
  console.log(authorId);

  if (!authorId) {
    return res.status(400).json({ message: "Invalid authorId" });
  }

  const authorIdObject = new mongoose.Types.ObjectId(authorId);
  try {
    // Number of Surveys for the author
    const totalSurvey = await Survey.countDocuments({
      author: authorIdObject,
    });

    // Number of response for the author
    const totalResponse = await Survey.aggregate([
      {
        $match: {
          author: authorIdObject,
          survey_response: { $exists: true, $ne: [] },
        },
      },
      {
        $group: {
          _id: null,
          totalCount: { $sum: { $size: "$survey_response" } }, // Count the number of reports
        },
      },
    ]);

    // Number of response for the author
    const totalPoll = await Survey.aggregate([
      {
        $match: {
          author: authorIdObject,
          polledBy: { $exists: true, $ne: [] },
        },
      },
      {
        $group: {
          _id: null,
          totalCount: { $sum: { $size: "$polledBy" } }, // Count the number of reports
        },
      },
    ]);

    const totalUserReports = await Survey.aggregate([
      {
        $match: {
          author: authorIdObject,
          reports: { $exists: true, $ne: [] },
        }, // Match surveys with admin reports
      },
      {
        $group: {
          _id: null,
          totalCount: { $sum: { $size: "$reports" } }, 
        },
      },
    ]);


    const totalAdminReports = await Survey.aggregate([
      {
        $match: {
          author: authorIdObject,
          adminReports: { $exists: true, $ne: [] },
        }, // Match surveys with admin reports
      },
      {
        $group: {
          _id: null,
          totalCount: { $sum: { $size: "$adminReports" } }, // Count the number of reports
        },
      },
    ]);

    // Send the analytics data in response
    res.status(200).json({
      totalSurvey,
      totalResponse: totalResponse.length > 0 ? totalResponse[0].totalCount : 0,
      totalAdminReports:
        totalAdminReports.length > 0 ? totalAdminReports[0].totalCount : 0,
      totalUserReports:
        totalUserReports.length > 0 ? totalUserReports[0].totalCount : 0,
      totalPoll: totalPoll.length > 0 ? totalPoll[0].totalCount : 0,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = getSurveyorAnalyticsData;
