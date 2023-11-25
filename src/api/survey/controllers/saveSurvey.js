const Survey = require("../../../models/Survey");

const saveSurvey = async (req, res) => {
  try {
    const surveyData = req.body; // Assuming the request body contains the survey data

    console.log(surveyData);
    const newSurvey = new Survey(surveyData);

    const savedSurvey = await newSurvey.save();

    res.status(201).json(savedSurvey);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = saveSurvey;
