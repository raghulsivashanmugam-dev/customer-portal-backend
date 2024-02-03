const Schedule = require("../Model/Schedule");

exports.createSchedule = async(req, res) => {
    try {
        const {scheduleName} = req.body;

        let check = await Schedule.findOne({scheduleName});

        if (check) {
            return res.status(400).json({
                message: "Schedule name already exist",
            });
        }

        var schedule = new Schedule({
            scheduleName
        })

        await schedule.save();

        return res.status(200).json({
            data: schedule,
            message: "Schedule created successfully",
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}

exports.getAllSchedule = async(req, res) => {
    try {
        const schedule = await Schedule.find();

        return res.status(200).json({
            data: schedule,
            message: "data fetched successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}

exports.getSingleSchedule = async(req, res) => {
    const _id = req.params.id;
    try {
        const schedule = await Schedule.findById(_id);

        return res.status(200).json({
            data: schedule,
            message: "data fetched successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}

exports.updateSchedule = async(req, res) => {
    const _id = req.params.id;
    try {
        const {scheduleName, isAuto, isOneOff, autoSend, startDate, sendTime, surveyId, sfdcStage, reminderOne, reminderTwo, dndList} = req.body;
        
        // let check = await Schedule.findOne({scheduleName});

        // if (check) {
        //     return res.status(400).json({
        //         message: "Schedule name already exist",
        //     });
        // }

        console.log(surveyId)

        let schedule = await Schedule.findByIdAndUpdate(
            _id,
            {
                scheduleName,
                isAuto,
                isOneOff,
                autoSend,
                startDate,
                sendTime,
                surveyId,
                sfdcStage,
                reminderOne,
                reminderTwo,
                dndList
            },
            {new: true}
        )

        return res.status(200).json({
            data: schedule,
            message: "Schedule updated successfully",
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}

exports.deleteSchedule = async(req, res) => {
    const _id = req.params.id
    try {
        const schedule = await Schedule.findByIdAndDelete(_id)
        return res.status(200).json({
            message: "Data deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}