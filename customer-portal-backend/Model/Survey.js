const mongoose = require('mongoose');

const Schema = mongoose.Schema(
    {
        surveyName: {
            type: String,
            required: true,
            default: null,
        }
    },
    {
        timestamps: true  
    }
)

module.exports = mongoose.model("survey", Schema)