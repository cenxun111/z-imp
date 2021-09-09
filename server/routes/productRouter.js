const router = require("express").Router();
const productCtrl = require("../controllers/productCtrl");
const auth = require("../middlewore/auth");

router.post("/createnewProduct", auth, productCtrl.createNewProduct);
router.get("/allproduct", auth, productCtrl.getAllProducts);
router.get("/product/:id",auth,productCtrl.singleProduct)
router.delete('/product/:id',auth,productCtrl.deleteProduct)
module.exports = router;
