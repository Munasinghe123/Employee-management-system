const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({

    name:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
    contactNumber:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    

})
module.exports=mongoose.model("UserModel", userSchema)