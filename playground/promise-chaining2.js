require('../src/db/mongoose')
const Task = require('../src/models/task')



// Task.findByIdAndDelete('6216c4b75f9f1f35be7fbde7').then(() => {
//     return Task.countDocuments({ complete: false })
// }).then((tasks) => {
//     console.log(tasks)
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    const deleted = await Task.findByIdAndDelete(id)
    const tasks = await Task.countDocuments({ complete: false })
    return {tasks: [tasks], deleted: deleted}
}

deleteTaskAndCount('621eb1ee997ecd31c80eaa44').then((tasks) => {
    console.log(tasks)
})