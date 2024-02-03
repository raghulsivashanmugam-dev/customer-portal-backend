const Survey = require("../Model/Survey");
const Question = require("../Model/Question")

exports.createSurvey = async (req, res) => {
    try {
        const { surveyName } = req.body;

        var surveyUni = await Survey.findOne({surveyName})
        
        if (surveyUni) {
            return res.status(400).json({
                message: "Survey name already exist",
            });
        }

        var survey = new Survey({
            surveyName
        })

        await survey.save();

        return res.status(200).json({
            data: survey,
            message: "Data created successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}

exports.getSurvey = async (req, res) => {
    try {
        const data = await Survey.find()

        return res.status(200).json({
            data,
            message: "Data fetched successfully",
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}

exports.getSingleSurvey = async (req, res) => {
    const _id = req.params.id
    try {
        const data = await Survey.findById(_id)

        return res.status(200).json({
            data,
            message: "Data fetched successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}

exports.updateSurvey = async (req, res) => {
    const _id = req.params.id
    try {
        const { surveyName } = req.body

        var surveyUni = await Survey.findOne({surveyName})
        
        if (surveyUni) {
            return res.status(400).json({
                message: "Survey name already exist",
            });
        }

        var survey = await Survey.findByIdAndUpdate(
            _id,
            {
                surveyName
            },
            { new: true }
        )

        return res.status(200).json({
            data: survey,
            message: "Data updated successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}

exports.deleteSurvey = async (req, res) => {
    const _id = req.params.id
    try {
        const question = await Question.find({surveyId: _id});

        for(var i = 0; i < question.length; i++){
            var deleteQuestion = await Question.findByIdAndDelete(question[i]._id)
        }
        const data = await Survey.findByIdAndDelete(_id);

        return res.status(200).json({
            message: "Data deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}

exports.copySurvey = async(req, res) => {
    const _id = req.params.id
    try {
        const {surveyName} = req.body;

        var surveyUni = await Survey.findOne({surveyName})
        
        if (surveyUni) {
            return res.status(400).json({
                message: "Survey name already exist",
            });
        }

        let question = await Question.find({surveyId: _id});
        
        let survey = new Survey({
            surveyName
        })

        await survey.save()

        for(var i = 0; i < question.length; i++){
            var newQuestion = new Question({
                questionTitle: question[i].questionTitle,
                questionType: question[i].questionType,
                questionArr: question[i].questionArr,
                surveyId: survey._id
            })

            await newQuestion.save()
        }

        return res.status(200).json({
            message: "Survey copied successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}

exports.previewSurvey = async(req, res) => {
    const _id = req.params.id
    try {
        
        const survey = await Survey.findById(_id);
        const question = await Question.find({surveyId: _id})

        var data = {
            survey: survey,
            question: question
        }

        return res.status(200).json({
            data,
            message: "Survey fetched successfully",
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}