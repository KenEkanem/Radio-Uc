import AllPost from "../../../models/post"
import Users from "../../../models/register"

export const createPost = async(req,res) =>{
    const {title,content,hastream} = req.body
    //function to handle upload of post content

    const findUser = await Users.findOne({_id:req.user})
    const create_post = new AllPost({
        postby: findUser.username,
        title: title,
        content: content,
        hasStream: hastream
    })
    const savePost = await create_post.save()
    if(!savePost){
        return res.status(500).send({error:'server error can\'t upload this content'})
    }
    return res.status(200).send({success:'Post submitted successfuly'})

}

//Fetch all the post from the database

export const fetchAllPost = async(req,res) =>{
    try {
        const fetchAll = await AllPost.find().sort({createdAt:-1})

    if(!fetchAll){
        return res.status(404).send({error:'No post available yet'})
    }

    return res.status(200).send({success:fetchAll})
    } catch (error) {
        conosle.log(error.message)
    }
}

//Fetch post by id

export const fetchsinglePost = async(req,res) =>{
    try {
        const fetchOne = await AllPost.findOne({_id:req.params.id})

    if(!fetchOne){
        return res.status(404).send({error:'This post does not exist'})
    }

    return res.status(200).send({success:fetchOne})
    } catch (error) {
        console.log(error.message)
    }
}