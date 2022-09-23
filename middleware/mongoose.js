import mongoose from "mongoose";

const connectDb = handler => async (req, res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req, res);
    }
    // const uri = "mongodb://localhost:27017/pp"
    const uri = process.env.MONGO_URI
    mongoose.connect(uri);

    return handler(req, res);
}

export default connectDb;