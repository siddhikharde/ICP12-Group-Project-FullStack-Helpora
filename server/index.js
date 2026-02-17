import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; 
import mongoose from 'mongoose';
import User from './models/user.js';
import jwt from './middleware/jwt.js';
import ImageKit from '@imagekit/nodejs'
import { postLogin, postRegister } from './controllers/aouth.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());


const connectDB =async ()=>{
   const con=await mongoose.connect(process.env.MONGODB_URI)
   console.log("Connected to MongoDB");
}

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

app.get('/auth', function (req, res) {
  const { token, expire, signature } = client.helper.getAuthenticationParameters();
  res.send({ token, expire, signature, publicKey: process.env.IMAGEKIT_PUBLIC_KEY });
});

app.get('/', (req, res) => {
  res.send('Welcome to the HELPORA...');
});

app.get('/health',(req,res)=>{
  res.send('Server is healthy');
})

app.post('/register', postRegister);
app.post('/login',postLogin);
 app.put('/user', jwt,  async (req, res)=>{
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

 })

 app.put("/profile-image", jwt , async (req, res)=>{
  try{
    const {id, profileImage}= req.body;
    const updatedUser= await User.findByIdAndUpdate(
      id,
      {profileImage},
      {new:true}
    );
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
 });
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});