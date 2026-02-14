import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; 
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './models/user.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const connectDB =async ()=>{
   const con=await mongoose.connect(process.env.MONGODB_URI)
   console.log("Connected to MongoDB");
}
app.use(cors());
app.use(express.json());

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


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});