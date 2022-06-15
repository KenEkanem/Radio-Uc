//connection to mongo db 

import mongoose from 'mongoose'

export const connect = () =>{
    mongoose.connect("mongodb://localhost:27017/liveradio",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.on("error",err =>{
    console.log(err)
})
mongoose.connection.on("connected",(err,res) =>{
    console.log("connection establish")
})
}