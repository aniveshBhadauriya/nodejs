const User = require('./model')
const d = async(req, res) =>{
    try{
        const dat = User.find({})
        console.log(dat,"====")
        // const {userName, email, password} = req.body
        // console.log(userName, email, password)
        const nuser = await new User({username:"userName", email:"email", password:"password"})
        await nuser.save()
        res.sendStatus(201)
    }
    catch(err){
        console.log(err,"-->>>")
        res.sendStatus(500)
        


}}
module.exports = d