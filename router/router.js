const expess=require('express')
const productController=require('../controller/productController')
const userController=require('../controller/userController')
const router=expess.Router()


//get all products

router.get('/allproducts',productController.getAllProductController)

//register

router.post('/register', userController.registerController)

//login

router.post('/login', userController.loginController)

//get a product

router.get('/view/product/:id',productController.getAProductController)



module.exports=router