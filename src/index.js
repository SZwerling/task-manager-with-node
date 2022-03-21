const express = require('express')
require('./db/mongoose')


const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const { db } = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if(req.method === 'GET'){
//         res.send('GET requuests are disabled.')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Sorry. Server under mainentance.')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)





app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')
const main = async () => {
    // const task = await Task.findById("6238f873ddfad1be9834fc5d")
    // await task.populate('owner')
    // console.log(task.owner);
    const user = await User.findById("6238f734f0cb43852ae8c5f6")
    await user.populate('tasks')
    console.log(user.tasks)
}
main()



