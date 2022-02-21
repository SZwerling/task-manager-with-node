//CRUD create read update delete

// const mongodb = require('mongodb')   //we installed mongodb library. allows connect to mongo database from node.js
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId
//below is same thing but with destructuring
const { MongoClient, ObjectId } = require('mongodb')

const id = new ObjectId()
console.log(id.id.length)
// console.log(id.getTimestamp())

console.log(id.toHexString().length)

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log("Unable to connect to database")
    }

    const db = client.db(databaseName)
    
    // db.collection('users').updateOne({
    //     _id: new ObjectId("62016c5e93206e8d194cff70")
    // }, {
    //     $inc: {
    //         age: 100
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age: 46
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        task: "Sleep"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})