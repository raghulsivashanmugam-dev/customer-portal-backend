const mongoose = require('mongoose');

const Schema = mongoose.Schema(
    {
        questionTitle: {
            type: String,
            required: true,
            default: null,
        },
        questionType: {
            type: String,
            required: true,
            default: null,
        },
        questionArr: {
            type: Array,
            required: true,
            default: [],
        },
        surveyId: {
            type: mongoose.Types.ObjectId,
            ref: "survey"
        }
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("question", Schema)