const expess=require('express')
const productController=require('../controller/productController')
const router=expess.Router()


//get all products

router.get('/allproducts',productController.getAllProductController)


module.exports=router