import mongoose from "mongoose";

const register = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },

})
const Users= mongoose.model("Users",register)
export default Users
