const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
    avatar:{
        type:String,
        default:""
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email",
          ],
    },
    password:{
        type:String,
        required:true
    },
    cart:{
        type:Array,
        default:[]
    },
    role:{
        type:Number,
        default: 0
    },
    history:{
        type:Array,
        default:[]
    },
},
    {timestamps:true}
);

module.exports = mongoose.model("User",userSchema)