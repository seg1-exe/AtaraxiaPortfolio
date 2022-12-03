import { connect} from 'mongoose'

export default async function dbConnect(){
    try{
        await connect("mongodb://localhost:27017/ataraxia")
        console.log('Connected to MongoDB')
    }catch(error){
        console.error(error)
    }
}