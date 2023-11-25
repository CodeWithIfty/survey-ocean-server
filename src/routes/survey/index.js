const getSingleSurvey = require("../../api/survey/controllers/getSingleSurvey");
const getSurveys = require("../../api/survey/controllers/getSurveys");
const saveSurvey = require("../../api/survey/controllers/saveSurvey");

const router = require("express").Router();

router.post("/survey", saveSurvey);

router.get("/surveys", getSurveys);

router.get("/surveys/:id", getSingleSurvey);

module.exports = router;
