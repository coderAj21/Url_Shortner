const express=require("express");
const app=express();
const cors=require("cors");
require("dotenv").config();

// port
const PORT=process.env.PORT || 4000;

// middleware for parsing the request body
app.use(express.json());



// set cors
app.use(cors({
    origin:"*",
    methods:["POST","GET","PUT","DELETE"],
    credentials:true,
}));


// routes
const router=require("./routes/routes");
app.use("/api/v1",router);



app.get("/",(req,res)=>{
    res.send("Server is Wroking");
})

// DB Connection
const dbConnect=require("./config/database");
dbConnect();

// server 
app.listen(PORT,()=>{
    console.log("Server is Working...");
});

