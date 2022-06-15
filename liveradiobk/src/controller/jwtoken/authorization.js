import jwt from 'jsonwebtoken'

export const authorization = (req,res,next) =>{
    try {
        const jwtToken = req.header("passkey")

        if(!jwtToken){
            return res.status(403).json('Not Authorize')
        }

        const payload = jwt.verify(jwtToken,"ken",)
        req.user = payload.user
        next()
    } catch (error) {
        return res.status(403).json('serNot authorized')
    }
}