require('../src/db/mongoose')
const User = require('../src/models/user')

// 6216cd29c55b0c807962f7a6

User.findByIdAndUpdate('621d2a9b7698efb94d69117c', { age: 12 }, { new: true }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 0 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})