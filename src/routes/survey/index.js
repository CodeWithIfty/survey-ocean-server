const {
  getFilteredSurveys,
} = require("../../api/survey/controllers/getFilteredSurveys");
const getSingleSurvey = require("../../api/survey/controllers/getSingleSurvey");
const getSurveys = require("../../api/survey/controllers/getSurveys");
const getUserSurveys = require("../../api/survey/controllers/getUserSurveys");
const postComment = require("../../api/survey/controllers/postComment");
const postPoll = require("../../api/survey/controllers/postPoll");
const postReport = require("../../api/survey/controllers/postReport");
const saveSurvey = require("../../api/survey/controllers/saveSurvey");
const updateLikeDislike = require("../../api/survey/controllers/updateLikeDislike");
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

router.get("/survey/:id", getSingleSurvey);

router.post("/like-dislike", updateLikeDislike);

router.post("/comment", verifyToken, verifyProUser, postComment);
router.post("/report", verifyToken, verifyProUser, postReport);

router.post("/post-poll", postPoll);

router.post("/survey/response", updateSurveyResponse);

router.get("/get-filtered-survey", getFilteredSurveys);

router.get(
  "/user-surveys/:userId",
  verifyToken,
  verifySurveyor,
  getUserSurveys
);

module.exports = router;
