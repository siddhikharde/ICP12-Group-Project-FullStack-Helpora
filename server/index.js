import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; 
import mongoose from 'mongoose';
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


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});