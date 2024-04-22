require('dotenv').config()
const expess=require("express");
const cors=require("cors")
require('./connection/db')
const router=require('./router/router')


const DailyCartServer=expess();

DailyCartServer.use(cors())
DailyCartServer.use(expess.json());
DailyCartServer.use(router)


const PORT=3000 || process.env.PORT


DailyCartServer.listen(PORT, ()=>{
    console.log(`DailyCartServer is running on port ${PORT}`)
})


DailyCartServer.get("/", (req, res)=>{
    res.send('<h2>Welcome to the Daily Cart Server</h2>');
})