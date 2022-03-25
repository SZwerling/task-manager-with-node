const express = require('express')
require('./db/mongoose')


const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const { db } = require('./models/user')

const app = express()
const port = process.env.PORT || 3000



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)





app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const Task = require('./models/task')
// const User = require('./models/user')
// const main = async () => {
//     // const task = await Task.findById("6238f873ddfad1be9834fc5d")
//     // await task.populate('owner') // brings in more info from 'owner' property, info from user
//     // console.log(task.owner);
//     const user = await User.findById("6238f734f0cb43852ae8c5f6")
//     await user.populate('tasks')  //brings in the more info from 'tasks'
// }
// main()



