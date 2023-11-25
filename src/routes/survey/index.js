const getSingleSurvey = require("../../api/survey/controllers/getSingleSurvey");
const getSurveys = require("../../api/survey/controllers/getSurveys");
const postComment = require("../../api/survey/controllers/postComment");
const postPoll = require("../../api/survey/controllers/postPoll");
const saveSurvey = require("../../api/survey/controllers/saveSurvey");
const updateLikeDislike = require("../../api/survey/controllers/updateLikeDislike");

const router = require("express").Router();

router.post("/survey", saveSurvey);

router.get("/surveys", getSurveys);

router.get("/survey/:id", getSingleSurvey);

router.post("/like-dislike", updateLikeDislike);

router.post("/comment", postComment);

router.post("/post-poll", postPoll);

module.exports = router;
