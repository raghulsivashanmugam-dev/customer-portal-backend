const Question = require("../Model/Question");
const Survey = require("../Model/Survey");

exports.createQuestion = async (req, res) => {
    try {
        const { questionTitle, questionType, questionArr, surveyId } = req.body;

        var question = new Question({
            questionTitle,
            questionType,
            questionArr,
            surveyId
        })

        await question.save();

        return res.status(200).json({
            data: question,
            message: "Data created successfully",
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

exports.getAllQuestions = async (req, res) => {
    const _id = req.params.id
    try {
        const data = await Question.find({ surveyId: _id })

        return res.status(200).json({
            data,
            message: "Data fetched successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

exports.getSingleQuestion = async (req, res) => {
    const _id = req.params.id
    try {
        const data = await Question.findById(_id);

        return res.status(200).json({
            data,
            message: "Data fetched successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

exports.updateQuestion = async (req, res) => {
    const _id = req.params.id
    try {
        const { questionTitle, questionType, questionArr, surveyId } = req.body;

        var data = await Question.findByIdAndUpdate(
            _id,
            {
                questionTitle,
                questionType,
                questionArr,
                surveyId
            },
            { new: true }
        )

        return res.status(200).json({
            data,
            message: "Data updated successfully",
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

exports.deleteQuestion = async (req, res) => {
    const _id = req.params.id
    try {
        const data = await Question.findByIdAndDelete(_id)
        return res.status(200).json({
            message: "Data deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}