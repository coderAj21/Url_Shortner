const mongoose=require("mongoose");
require("dotenv").config();


const dbConnect=()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>(console.log("DB is Connected...")))
    .catch((error)=>{
        console.log("Error: ",error);
    });
};

module.exports=dbConnect;