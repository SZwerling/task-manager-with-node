//get ready for rest api
//REpresentational State Transfer
//Application Programming Interface
const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");



const Task = mongoose.model('Task', {
    task: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    }
})


