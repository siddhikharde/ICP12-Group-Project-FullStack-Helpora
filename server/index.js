import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; 
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './models/user.js';
import jwt from './middleware/jwt.js';
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
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});