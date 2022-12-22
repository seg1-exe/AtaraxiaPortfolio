import {model, Schema} from 'mongoose';

const oeuvreSchema = new Schema({
    nom : {type : String, required : true},
    file : {type : String, required : true},
    description : {type : String, required: true},
    work1: {type : String, required: false},
    work2: {type : String, required: false},
    work3: {type : String, required: false},
    youtube: {type : String, required: false},
});

export default model('oeuvre', oeuvreSchema);