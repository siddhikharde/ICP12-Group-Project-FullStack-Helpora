import dotenv from 'dotenv'; 
import User from '../models/user.js';
dotenv.config();

const putUser=async (req, res)=>{
  const {id, fullName, email, phoneNo}=req.body;
       const user=await User.findByIdAndUpdate(id,{
        fullName,
        email,
         phoneNo
       })
       const userData=await User.findById(id);
       userData.password=undefined;
   try{
     if(user){
      return res.json({
        success:true,
        message:"User Information Updated Successfully.",
        data:userData
      })
   }
    }catch(e){
      return res.json({
        success:false,
        message:"Faild to update..",
        error:e.message
        
      })
    }

 }

 const putProfileImg=async (req, res)=>{
  try{
    const {id, profileImage}= req.body;
    const updatedUser= await User.findByIdAndUpdate(
      id,
      {profileImage},
      {new:true}
    );
    console.log("Updating profile for ID:", req.body.id);
     res.json({
      success:true,
      message:"Profile image updated",
      data:updatedUser
     })
  }catch(e){
    res.json({
      success:false,
      message: "Server error",
    })
  }
 }

 export {putUser, putProfileImg}