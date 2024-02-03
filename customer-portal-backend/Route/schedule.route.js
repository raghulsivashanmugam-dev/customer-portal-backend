const express = require('express');
const router = express.Router();
const scheduleController = require("../Controller/schedule.controller")

router.post("/schedule", scheduleController.createSchedule);
router.get("/schedule", scheduleController.getAllSchedule);
router.get("/schedule/:id", scheduleController.getSingleSchedule);
router.put("/schedule/:id", scheduleController.updateSchedule);
router.delete("/schedule/:id", scheduleController.deleteSchedule);

module.exports = router;