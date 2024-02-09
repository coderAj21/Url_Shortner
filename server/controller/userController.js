const User=require("../modals/User");
const bcrypt=require("bcrypt");

// sign 
exports.signup=async (req,res)=>{
    try{
        const{name,email,password,confirmPassword}=req.body;

        if (!name || !email || !password || !confirmPassword){
            return res.status(401).json({
                success:false,
                message:"All field required...",
                error:error.message
            });
        };
        if (password!==confirmPassword){
            return res.status(501).json({
                success:false,
                message:"Password did not match...",
                error:error.message
            });
        }
        const user=await User.findOne({email});
        if (user){
            return res.status(401).json({
                success:false,
                message:"User already Exists",
            });
        }

        let hashedPassord=await bcrypt.hash(password,10);
        const newUser=await User.create({
            name,
            email,
            password:hashedPassord,
        });
        return res.status(200).json({
            success:true,
            message:"User registered Successfully..",
        })
    }catch(error){
        return res.status(400).json({
            success:false,
            message:"Error occured during signup...",
            error:error
        });
    };
};

// login
exports.login=async (req,res)=>{
    try{
        const {email,password}=req.body;
        if (!email || !password){
            return res.status(400).json({
                success:false,
                message:"All field required...",
            });
        };
        const user =await User.findOne({email});
        if (!user){
            return res.status(400).json({
                success:false,
                message:"User not exists...",
            });
        }
        if(!await bcrypt.compare(password,user.password)){
            return res.status(400).json({
                success:false,
                message:"Password did not match...",
            });
        }
        return res.status(200).json({
            success:true,
            message:"Login Successfully.."
        });
    }catch(error){
        return res.status(400).json({
            success:false,
            message:"Error occured during login...",
            error:error.message
        });
    };
};

// fetch the all url
exports.getAllUrl=async (req,res)=>{
    try{
        const {email}=req.body;
        const user=await User.findOne({email});
        return res.status(200).json({
            success:true,
            data:user.url,
            message:"All Url successfully fetched.."
        });
    }catch(error){
        return res.status(400).json({
            success:false,
            message:"Error occured during fetching the url...",
            error:error.message
        });
    }
}

exports.updateUrl=async(req,res)=>{
    try{
        const {email,option}=req.body;
        const user=await User.findOneAndUpdate(
            {email:email},
            {$push:{url:option}},
            {new:true}
        );
        return res.status(200).json({
            success:true,
            message:"Url add Successfully...",
            data:user,
        });
    }catch(error){
        return res.status(400).json({
            success:false,
            message:"Error occured during updation of URL...",
            error:error.message
        });
    };
};

exports.getUser=async(req,res)=>{
    try{
        const email=req.params.id;
        const user=await User.findOne({email});
        user.password=undefined;
        return res.status(200).json({
            success:true,
            user,
            message:"User Data is Fetched completely..."
        });
    }catch(error){
        return res.status(400).json({
            success:false,
            message:"Error during fetching the user data"
        })
    }
}

exports.deleteUrl=async (req,res)=>{
    try{
        const {email,option}=req.body;
        
        const user=await User.findOne({email});  

        const urlIndex=user.url.findIndex(url => url.original_url === option.original_url);

        if (urlIndex === -1) {
            return res.status(401).json({
                success: false,
                message: "URL not found in user's list."
            });
        };
        user.url.splice(urlIndex,1);
        await user.save();

        return res.status(200).json({
            success:true,
            user,
            message:"Delete Successfully",
        })
    }catch(error){
        return res.status(400).json({
            success:false,
            message:"Error occured during Deleting Url...",
            error:error.message
        });
    };
};
