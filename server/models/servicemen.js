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
      location: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
     skills: {
      type: [String],
      default: [],
    },
 rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
     totalReviews: {
      type: Number,
      default: 0,
    },
    availability:{
        type:Boolean,
        default:true
    },

    professionalSummary:{
        type:String,
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    
}, { timestamps: true })

const Servicemen = model('Servicemen', servicemenSchema);

export default Servicemen;