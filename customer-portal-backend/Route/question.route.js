const express = require('express');
const router = express.Router();
const questionController = require("../Controller/question.controller");

router.post("/question", questionController.createQuestion);
router.get("/question/:id", questionController.getAllQuestions);
router.get("/question/surveyId/:id", questionController.getSingleQuestion);
router.put("/question/:id", questionController.updateQuestion);
router.delete("/question/:id", questionController.deleteQuestion);

module.exports = router;