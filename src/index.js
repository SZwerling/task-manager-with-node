const express = require('express')
require('./db/mongoose')


const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

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

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: '1234' }, 'thisismynewcourse', { expiresIn: '1 second' })
    console.log('token ' + token)

    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}

myFunction()



