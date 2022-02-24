const mongoose = require('mongoose');
const validator = require('validator')

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");


const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positive number.')
            }
        }
    }
})

const Task = mongoose.model('Task', {
    task: {
        type: String,
    },
    completed: {
        type: Boolean
    }
})

// const thing = new Task({
//     task: "Sleep",
//     completed: true
// })

// thing.save().then(() => {
//     console.log(thing)
// }).catch((error) => {
//     console.log('Error: ', error)
// })

const me = new User({
    name: '  Tom ',
    email: 'someTHTHTingwrong@gmail.com  '
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log("error: ", error)
})