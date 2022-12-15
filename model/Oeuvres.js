import {model, Schema} from 'mongoose';

const oeuvreSchema = new Schema({
    nom : {type : String, required : true},
    file : {type : String, required : true},
    description : {type : String, required: true}
});

export default model('oeuvre', oeuvreSchema);