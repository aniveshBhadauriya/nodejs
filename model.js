
const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true  // for ref -> will remove white spaces only
    },
    password:{
        type:String,
        required:true,
    }
    // company:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'Company'

    // },
})


const User = mongoose.model("User", userSchema)
module.exports = User