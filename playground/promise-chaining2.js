require('../src/db/mongoose')
const Task = require('../src/models/task')



Task.findByIdAndDelete('6216c4b75f9f1f35be7fbde7').then(() => {
    return Task.countDocuments({ complete: false })
}).then((tasks) => {
    console.log(tasks)
}).catch((e) => {
    console.log(e)
})