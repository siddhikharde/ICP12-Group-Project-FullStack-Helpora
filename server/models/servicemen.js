import {Schema, model} from 'mongoose';

const servicemenSchema = new Schema({
    field:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    skills:{
        type:[String],
        required:true
    },
    availability:{
        type:Boolean,
        default:true
    },
    certifications:{
        type:[String],
    },
    professionalSummary:{
        type:String,
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})

const Servicemen = model('Servicemen', servicemenSchema);