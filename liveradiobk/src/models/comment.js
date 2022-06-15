import mongoose from "mongoose";

const Comment = new mongoose.Schema({
    text:{
        type:String,
        require:true,
        
    },
    commentby:{
        type:String,
        require:true,
        ref: "Users"
    },
    post_id:{
        type:String,
        require:true
    },
  
},
{timestamps:true})
const AllComment= mongoose.model("Comment",Comment)
export default AllComment
