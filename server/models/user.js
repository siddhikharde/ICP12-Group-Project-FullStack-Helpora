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
 },role:{
    default:"Book",
    type:String,
    required:true
 },profileImage:{
    type:String,
 },
 })

const User = model("User",userSchema);

export default User;
