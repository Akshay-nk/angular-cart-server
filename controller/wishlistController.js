const wishlist=require('../model/wishlistModel')

//add

exports.addToWishlistController=async(req,res)=>{
    const {id,title,price,description, category,image, rating}=req.body

    const userId=req.payload

    try {
        const existingProduct=await wishlist.findOne({id,userId})
        if(existingProduct){
            res.status(406).json("product already exist in wishlist")
        }else{
            const newProduct=new wishlist(
                {id,title,price,description, category,image, rating,userId}
            )
            await newProduct.save()
            res.status(201).json(newProduct)
            
        }
    } catch (error) {
        res.status(401).json(error)
    }

}


//get

exports.getToWishlistController=async(req,res)=>{
const userId=req.payload

try {
    const allProducts=await wishlist.find({userId})
    res.status(201).json(allProducts)

    
} catch (err) {
    res.status(401).json(err)
}
}

exports.removeToWishlistController=async(req,res)=>{
    const {id}=req.params
    try {
        const removedProduct =await wishlist.findByIdAndDelete({id:_id})
        res.status(201).json(removedProduct)
        
    } catch (error) {
        res.status(401).json(err)

    }
}