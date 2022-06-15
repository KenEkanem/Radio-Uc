/**
 * 
 * this middelware handles the registration and login layer of our application
 */

import bcrypt from 'bcrypt'
import Users from "../../../models/register"
import { jwtGenerator } from '../../jwtoken/generateJwt'

export const Register = async(req,res) =>{
   console.log("here")
    try {
        const {email,username,password} = req.body

        //check if req.body has no empty fields
        if(!email || !username || !password){
            return res.status(400).send({error:'please no empty fields'})
        }
    //check if email exist
    const checkEmail = await Users.findOne({email:email})
    if(checkEmail){
        return res.status(400).send({error:'user with this email already exist'})
    }

    //countinue if user not found

    //encrypt password
    const salt = 10
    const setPassword = await bcrypt.hash(password, salt)

    //insert user to database
    const insertUser = await new Users({
        email:email,
        username:username,
        password:password
    })
    const save_user = await insertUser.save()
    if(!save_user){
        return res.status(500).send({error:'user can not be register server error'})
    }
    return res.status(200).send({success:'user has successfully been registered'})

    } catch (error) {
        console.log(error.message)
    }
}

//Login
export const LOGIN = async(req,res)=>{
    const {email,password} = req.body
    

    if(!email){
        return res.status(400).send({error:'please no empty fields'})
    }
    //check if email exist
    const checkUser = await Users.findOne({email:email})

    //compare password
    const checkPassword = bcrypt.compare(password,checkUser.password)

    if(!checkPassword){
        return res.status(400).send({error:'password not correct'})
    }

    const token = jwtGenerator(checkUser._id)

    //send payload to localstorage
    return res.status(200).send({token:token})

}

// verify jwt token
export const checkPass = (req,res)=>{
    return res.status(200).send({message:true})
}