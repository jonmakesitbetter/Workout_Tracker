const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({

    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: {
            type: String,
            trim: true,
            required: true
                },
            
        name: {
            type: String,
            trim: true,
            required: "Exercise name is required.",
            minlength: 1
        },
        duration: {
           type: Number,
           trim: true,
           required: true
        },
        weight: {
            type: Number,
            trim: true,
            required: false
        },
        reps: {
            type: Number,
            trim: true,
            required: false
        },
        sets: {
            type: Number,
            trim: true,
            required: false
        },
        distance: {
            type: Number,
            trim: true,
            required: false
      },
      }]

});

const Workouts = mongoose.model("Workouts", WorkoutsSchema);
module.exports = Workouts;