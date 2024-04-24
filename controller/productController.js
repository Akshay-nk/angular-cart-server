const products=require('../model/productModel')



//get all products

exports.getAllProductController=async(req,res)=>{
    try {

        const result=await products.find()
        res.status(200).json(result)
        
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.getAProductController=async(req,res)=>{
    const {id}=req.params
    try {
    const result=await products.findOne({id})
    res.status(200).json(result)
        
    } catch (err) {
        res.status(401).json(err)
    }
}