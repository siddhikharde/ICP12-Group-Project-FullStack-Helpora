import { model, Schema } from "mongoose";
 const userSchema = new Schema({
   fullName:{
    type:String,
    required:true,

   },
   email:{
    type:String,
    required:true,
    unique:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        required:true
 },service:{
    default:"Book a service",
    type:String,
    required:true
 }
 })

const User = model("User",userSchema);

export default User;
