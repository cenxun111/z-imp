const Products = require("../models/productModel");

const productCtrl = {
    createNewProduct: async (req,res) => {
        const newProduct = new Products(req.body);
        try{
            const savedProduct = await newProduct.save();
            res.status(200).json(savedProduct);
        }catch(err){
            res.status(500).json(err);
        }
    },
    getAllProducts:async(req,res) => {
        try {
            const allProducts = await Products.find({username:req.user.username}).sort({"createdAt": -1}
            );
        res.status(200).json(allProducts)
    } catch(err){
        return res.status(500).json(err);
    }
},
    singleProduct:async(req,res) => {
        try {
            const product = await Products.findById(req.params.id);
            res.status(200).json(product);
        }catch(err) {
            return res.status(500).json(err);
        }
    },
 
    deleteProduct:async(req,res) => {
        try{
            const product = await Products.findOneAndDelete({_id:req.params.id})
            res.json({
                msg:'DEleted'
            })
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
}




 module.exports  = productCtrl