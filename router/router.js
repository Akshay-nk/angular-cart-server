const expess=require('express')
const productController=require('../controller/productController')
const userController=require('../controller/userController')
const router=expess.Router()
const wishlistController=require('../controller/wishlistController')
const jwtMiddleware = require('../middleware/jwtMiddleware')


//get all products

router.get('/allproducts',productController.getAllProductController)

//register

router.post('/register', userController.registerController)

//login

router.post('/login', userController.loginController)

//get a product

router.get('/view/product/:id',productController.getAProductController)

//add

router.post('/addwishlist',jwtMiddleware,wishlistController.addToWishlistController)

router.post('/getwishlist',jwtMiddleware,wishlistController.getToWishlistController)

router.post('/removewishlist',jwtMiddleware,wishlistController.removeToWishlistController)




module.exports=router