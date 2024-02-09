const express=require("express");
const router=express.Router();


const {
    login, signup, getAllUrl, updateUrl,getUser, deleteUrl
}=require("../controller/userController");


router.put("/deleteUrl",deleteUrl);
router.get("/getUser/:id",getUser);
router.post("/updateUrl",updateUrl);
router.get("/allUrl",getAllUrl);
router.post("/signup",signup);
router.post("/login",login);


module.exports=router;