const express = require("express");
const router = express.Router();
const db = require("../models");
const path = require("path");



router.get(".api/workout", (req, res) => {
    db.Workout.find({}).then((foundWorkout) => {
        res.json(foundWorkout);
    }).catch(err => {
        console.log(err);
        res.json({
            error: true,
            data: null,
            message: "Failed to retrieve workout."
        });
    });
})

router.post("/api/workout", (req, res) => {
    db.Workout.create(req.body).then((newWorkout) => {
        res.json(newWorkout);
    }).catch(err => {
        console.log(err);
        res.json({
            error: true,
            data: null,
            message: "Failed to create workout.",
        });
    });
});

router.put("/api/workout/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, req.body, {
        $push: {
            exercises: req.body
        }
    }).then((updatedWorkout) => {
        res.json(updatedWorkout);
    }).catch(err => {
        console.log(err);
        res.json({
            error: true,
            data: null,
            message: "Failed to update workout.",
        });
    });
});

router.get("./", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("./exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("./stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});


module.exports = router;