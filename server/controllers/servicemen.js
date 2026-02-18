import Servicemen from "../models/servicemen";
import User from "../models/user";
import jwt from "../middleware/jwt";
import dotenv from 'dotenv';

dotenv.config();

const getServicemenProfile=async (req,res)=>{
    try{
        const {fullname, email,phoneNo}=req.user;
        return res.json({
            success:true,
            message:"Servicemen profile retrieved successfully",
            data:{
                fullname,
                email,
                phoneNo
            }
        })
    }
    catch(e){
        return res.json({
            success:false,
            message:"Failed to retrieve servicemen profile",
            error:{message:e.message}
        })
    }
}
