import AllComment from "../../../models/comment"
import Users from "../../../models/register"

// insert all comment
export const comment = async(req,res)=>{
    
    const {text,post_id} = req.body
    if(!text){
        return res.status(400).send({error:'type comment first...'})
    }

    //const fetctUsername of user loggedIn
    const fetchUsername = await Users.findOne({_id:req.user})
    if(!fetchUsername){
        return res.status(400).send({error:'user does not exist'})
    }
    const createCOmment = await new AllComment({
        text:text,
        post_id:post_id,
        commentby:fetchUsername.username
    })

    const saveComment = await createCOmment.save()
    if(!saveComment){
        return res.status(500).send({error:'Server error'})
    }
    return res.status(200).send({success:'comment save'})
}

// fetch comment by post id

export const FetchAllcomment = async(req,res)=>{
   
 const fetchAllComm = await AllComment.find({post_id:req.params.id})

 if(fetchAllComm){
    return res.status(200).send({success:fetchAllComm})
 }
 console.log("no commenr")
}