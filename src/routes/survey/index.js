const {
  getLatestPublishedSurveys,
} = require("../../api/survey/controllers/getFeaturedSurveys");
const {
  getFilteredSurveys,
} = require("../../api/survey/controllers/getFilteredSurveys");
const getSingleSurvey = require("../../api/survey/controllers/getSingleSurvey");
const getSurveyorAnalyticsData = require("../../api/survey/controllers/getSurveyorAnalyticsData");
const getSurveys = require("../../api/survey/controllers/getSurveys");
const getUserSurveys = require("../../api/survey/controllers/getUserSurveys");
const postAdminReport = require("../../api/survey/controllers/postAdminReport");
const postComment = require("../../api/survey/controllers/postComment");
const postPoll = require("../../api/survey/controllers/postPoll");
const postReport = require("../../api/survey/controllers/postReport");
const saveSurvey = require("../../api/survey/controllers/saveSurvey");
const updateLikeDislike = require("../../api/survey/controllers/updateLikeDislike");
const {
  updatePublicationStatus,
} = require("../../api/survey/controllers/updatePublicationStatus");
const { updateSurvey } = require("../../api/survey/controllers/updateSurvey");
const {
  updateSurveyResponse,
} = require("../../api/survey/controllers/updateSurveyResponse");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const verifyProUser = require("../../middlewares/verifyProUser");
const verifySurveyor = require("../../middlewares/verifySurveyor");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

router.post("/survey", saveSurvey);

router.get("/surveys", getSurveys);

router.get("/survey/:id", verifyToken, getSingleSurvey);

router.post("/like-dislike", verifyToken, updateLikeDislike);

router.post("/comment", verifyToken, verifyProUser, postComment);
router.post("/report", verifyToken, postReport);
router.post("/admin-report", verifyToken, verifyAdmin, postAdminReport);

router.post("/post-poll", verifyToken, postPoll);

router.post("/survey/response", verifyToken, updateSurveyResponse);

router.get("/get-filtered-survey", getFilteredSurveys);

router.get("/get-featured-surveys", getLatestPublishedSurveys);

router.put(
  "/survey/publish",
  verifyToken,
  verifyAdmin,
  updatePublicationStatus
);

router.put(
  "/update-survey/:surveyId",
  verifyToken,
  verifySurveyor,
  updateSurvey
);

router.get(
  "/user-surveys/:userId",
  verifyToken,
  verifySurveyor,
  getUserSurveys
);

router.get("/surveyor-analytics/:authorId", getSurveyorAnalyticsData);

module.exports = router;
