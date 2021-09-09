const mongoose = require("mongoose");
const wordSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
        },
        english:{
            type:String,
            required:true,
        },
        chinese:{
            type:String,
            required:true,
        },
        mark:{
            type:Boolean,
            default:false
        }
    },
    {
        timestamps: true,
      }
)

module.exports = mongoose.model("Word",wordSchema);