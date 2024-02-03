const express = require('express');
const router = express.Router();
const surveyController = require("../Controller/survey.controller")

router.post("/survey", surveyController.createSurvey);
router.get("/survey", surveyController.getSurvey);
router.get("/survey/:id", surveyController.getSingleSurvey);
router.put("/survey/:id", surveyController.updateSurvey);
router.delete("/survey/:id", surveyController.deleteSurvey);
router.post("/copySurvey/:id", surveyController.copySurvey);
router.get("/preview/:id", surveyController.previewSurvey);

module.exports = router