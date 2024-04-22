const mongoose=require('mongoose');

const connectonString=process.env.DB_CONNECTION


mongoose.connect(connectonString).then(
    (res)=>{
        console.log("Database Connected Successfully");
    }
).catch((err)=>{
    console.log(err);
})