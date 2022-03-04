require('../src/db/mongoose')
const User = require('../src/models/user')



// User.findByIdAndUpdate('621d2a9b7698efb94d69117c', { age: 12 }, { new: true }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 0 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age: age }) //or just { age }
    const count = await User.countDocuments({ age }) // like here
    return count
}

updateAgeAndCount( '621d2a9b7698efb94d69117c', 35).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})