const mongoose = require('mongoose');

const Schema = mongoose.Schema(
    {
        scheduleName: {
            type: String,
            required: true,
            default: null,
        },
        isAuto: {
            type: Boolean,
            required: false,
            default: false,
        },
        isOneOff: {
            type: Boolean,
            required: false,
            default: false,
        },
        autoSend:{
            type: String,
            required: false,
            default: null,
        },
        startDate: {
            type: String,
            required: false,
            default: null,
        },
        sendTime:{
            type: String,
            required: false,
            default: null,
        },
        surveyId:{
            type: mongoose.Types.ObjectId,
            ref: "survey",
            required: false,
            default: null
        },
        sfdcStage:{
            type: String,
            required: false,
            default: null,
        },
        reminderOne: {
            type: String,
            required: false,
            default: null,
        },
        reminderTwo: {
            type: String,
            required: false,
            default: null,
        },
        dndList: {
            type: String,
            required: false,
            default: null,
        }
    }
)

module.exports = mongoose.model("schedule", Schema)