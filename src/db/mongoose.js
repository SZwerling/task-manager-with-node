const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");


const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const Task = mongoose.model('Task', {
    task: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const thing = new Task({
    task: "Sleep",
    completed: true
})

thing.save().then(() => {
    console.log(thing)
}).catch((error) => {
    console.log('Error: ', error)
})

// const me = new User({
//     name: "Slim",
//     age: 46
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log("error: ", error)
// })