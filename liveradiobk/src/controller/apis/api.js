import express from 'express'
import { authorization } from '../jwtoken/authorization'
import { checkPass, LOGIN, Register } from '../middelware/Authentication/register'
import { createPost, fetchAllPost, fetchsinglePost } from '../middelware/post/post'
import multer from 'multer'
import { comment, FetchAllcomment } from '../middelware/comment/comment'


const upload = multer({dest: 'upload/'})

const api = express.Router()
api.post('/register',Register)
api.post('/login',LOGIN)
api.get('/verifyKey',authorization,checkPass)
api.post('/createPost',authorization,upload.single("file"),createPost)
api.get('/fetchAllPost',fetchAllPost)
api.get('/fetchsinglePost/:id',fetchsinglePost)
api.post('/comment',authorization,comment)
api.get('/Fetchcomment/:id',FetchAllcomment)

export default api