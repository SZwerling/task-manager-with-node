//CRUD create read update delete

const mongodb = require('mongodb')   //we installed mongodb library. allows connect to mongo database from node.js
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log("Unable to connect to database")
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: "Slim",
    //     age: 46
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.insertedId)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Johnny',
    //         age: 33
    //     },
    //     {
    //         name: 'Samantha',
    //         age: 22
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert docuents')
    //     }

    //     return console.log(result.insertedIds)
    // })

    db.collection('tasks').insertMany([
        {
            task: 'Sleep',
            completed: false
        },{
            task: 'Eat',
            completed: true
        },{
            task: 'Clean the cat.',
            completed: false
        }
    ], (error, result) => {
        if(error){
            return console.log(error)
        }

        return console.log(result.insertedIds)
    })
})