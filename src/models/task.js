const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    task: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'  //gives a reference to another model, here the Task model
    }
}, {
    timestamps: true
});

const Task = mongoose.model("Task", taskSchema)


module.exports = Task;