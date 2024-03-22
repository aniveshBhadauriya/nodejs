const mongoose = require('mongoose')
// require('dotenv').config();

// console.log(process.env.DB_URI)
db = mongoose.createConnection("mongodb://localhost:27017/somedb?retryWrites=true&w=majority",
    {useNewUrlParser: true})

db.on("error",(err)=>{
    console.log(`MongoDb Connection Error ${err}`) 
})
db.once("open",()=>{
    console.log("MongoDb connected")
})

module.exports = db