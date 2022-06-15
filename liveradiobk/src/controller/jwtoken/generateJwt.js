import jwt from 'jsonwebtoken'

export const jwtGenerator = (userID) =>{
    const payload = {
        user:userID
    }
    return jwt.sign(payload,"ken",{expiresIn: '1d'})
}