import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; 
import mongoose from 'mongoose';
import User from './models/user.js';
import jwt from './middleware/jwt.js';
import ImageKit from '@imagekit/nodejs'
import { putProfileImg, putUser } from './controllers/user.js';
import { postLogin, postRegister } from './controllers/aouth.js';
import {getServicemenProfile, getAllServicemens, getServicemenById} from "./controllers/servicemen.js"
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

 app.put('/user', jwt, putUser );
 app.put("/profile-image", jwt , putProfileImg);

 app.get('/servicemenProfile', jwt, getServicemenProfile);
 app.get('/servicemens', getAllServicemens);
 app.get('/servicemen/:id', getServicemenById);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});