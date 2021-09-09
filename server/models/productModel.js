const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    username:{
        type:String,
        required:true
    },
    product_id:{
        type:String,
        unique:true,
        trim:true,

    },
    title:{
        type:String,
        
    },
    price:{
        type:Number,
        trim:true,
        
    },
    description:{
        type:String,
        
    },
    image:{
        type:String,
      
    },
    category:{
        type:String,
        
    },
    checked:{
        type: Boolean,
        default: false
    },
    sold:{
        type: Number,
        default: 0
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);