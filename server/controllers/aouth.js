import dotenv from 'dotenv';
import User from './../models/user.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Servicemen from '../models/servicemen.js';

dotenv.config();

const postRegister=async (req,res)=>{
   try{
  const {fullName,email,password, phoneNo, role,
      field,  experience, location, price, skills, professionalSummary, serviceAreas,
  }=req.body;
  if(!fullName || !email || !password || !phoneNo || !role){
    return res.json({
      success:false,
      message:"All fields are required",
      data:null,
      });
  }
  const existingUser= await User.findOne({email});
  if(existingUser){
    return res.json({
      success:false,  
      message:"User already exists",
      data:null,
    })
  }
  
  if(role=="Provide"){
     if (!field || !experience || !location || !price) {
        return res.status(400).json({
          success: false,
          message: "Provider details are required",
        });
      }
  }
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword=await bcrypt.hash(password,salt);
  const newUser = new User({
    fullName,
    email,
    password:hashedPassword,
    phoneNo,
    role,
     location,
  })

  const savedUser= await newUser.save();
  if(role=="Provide"){
       const newProvider = new Servicemen({
        userId: savedUser._id,
        field,
        experience,
        serviceAreas: serviceAreas || [],
        price,
        skills: skills || [],
        professionalSummary,
      });

      const savedProvider= await newProvider.save();
  }
    return res.json({
      success:true,
      message:"User registered successfully",
      data:savedUser,
    })
  }catch(error){
    return res.json({
      success:false,
      message:"Error registering user",
      data:error.message,
    })
  }
}

const postLogin=async (req,res)=>{
  const {email,password}=req.body;
  if(!email || !password){
    return res.json({
      success:false,
      message:"Email and password are required",
      data:null,
    })}
    const user=await User.findOne({email});
    if(!user){
      return res.json({
         success:false,
        message:"User not found",
        data:null,
       })
    }
    const checkPassword=await bcrypt.compare(password,user.password);
    user.password=undefined;
    if(!checkPassword){
      return res.json({
        success:false,
        message:"Invalid Email or password",
        data:null,
      })
    }else{
      const jwtToken=jwt.sign({
        id:user._id,
        email:user.email,
      },process.env.JWT_SECRET,{
        expiresIn:"1d",
      })

       return res.json({
      success:true,
      message:"Login successful",
      data:user,
      token:jwtToken,
    })
    }
   
  }

export {postRegister, postLogin};