import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; 
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './models/user.js';
import jwt from 'jsonwebtoken';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());


const connectDB =async ()=>{
   const con=await mongoose.connect(process.env.MONGODB_URI)
   console.log("Connected to MongoDB");
}

const checkJwtToken=(req, res, next)=>{
  const {authorization}=req.headers;
  const token=authorization && authorization.split(" ")[1];
  try{
    const decode=jwt.verify(token,process.env.JWT_SECRET);
    req.user=decode;
    console.log("Decoded JWT:", decode);
    next();
  }catch(e){
    return res.json({
      success:false,
      message:"Invalid token",
      data:null,
    })
  }
}

app.get('/', (req, res) => {
  res.send('Welcome to the HELPORA...');
});

app.get('/health',(req,res)=>{
  res.send('Server is healthy');
})

app.post('/register',async (req,res)=>{
  const {fullName,email,password, phoneNo, service}=req.body;
  if(!fullName || !email || !password || !phoneNo || !service){
    return res.json({
      success:false,
      message:"All fields are required",
      data:null,
      });
  }

   const salt = bcrypt.genSaltSync(10);
  const hashedPassword=await bcrypt.hash(password,salt);
  const newUser = new User({
    fullName,
    email,
    password:hashedPassword,
    phoneNo,
    service
  })

  const existingUser= await User.findOne({email});
  if(existingUser){
    return res.json({
      success:false,  
      message:"User already exists",
      data:null,
    })
  }
  try{
    const savedUser=await newUser.save();
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
  }}
);

app.post('/login',async (req,res)=>{
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
    })
    }
   
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});