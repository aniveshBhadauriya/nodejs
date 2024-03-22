const express = require('express')

const d = require("./controller")
const sesssion = require("./SessionBased/session")
app = express()
const db = require("./database/db")
const routes = require("./routes/index")
app.use(sesssion)
app.get("/",(req,res)=>{
    res.sendStatus(200)
})
app.use("/api", routes)

app.post("/",d)



app.listen(4000,()=>{
    console.log("running on 4000")
})