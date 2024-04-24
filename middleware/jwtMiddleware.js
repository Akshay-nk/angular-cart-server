const jwt=require('jsonwebtoken')

const jwtMiddleware=(req,res,next)=>{
    try {

        const token=req.headers['authorization'].split(" ")[1]
        if(token){
            const jwtresponsse=jwt.verify(token,process.env.JWT_SECRET)
            req.payload=jwtresponsse.userId
            next()
        }else{
            res.status(401).json(" token is not available")
        }
        
    } catch {
        res.status(401).json("please login")
    }
}

module.exports=jwtMiddleware; 