import mongoose from "mongoose";

const post = new mongoose.Schema({
    postby:{
        type:String,
        require:true,
        ref: "Users"
    },
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    hasStream:{
        type:Boolean
    }

},
{timestamps:true})
const AllPost= mongoose.model("Post",post)
export default AllPost
