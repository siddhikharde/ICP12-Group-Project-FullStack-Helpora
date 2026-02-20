import {Schema, model} from 'mongoose';

const feedbackSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    }
});

const feedback = model('feedbaack',feedbackSchema);

export default feedback;