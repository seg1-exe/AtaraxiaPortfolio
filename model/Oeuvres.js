import {model, Schema} from 'mongoose';

const oeuvreSchema = new Schema({
    nom : {type : String, required : true},
    oeuvre : {type : String, required : true},
    date : {type : Date, default : Date.now}
});

export default model('oeuvre', oeuvreSchema);