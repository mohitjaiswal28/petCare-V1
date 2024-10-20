
const jwt = require('jsonwebtoken')
const User = require('../model/userSchema')

const authForLogin = async (req, res, next) => {

    const token = req.header('Authorization')

    if(!token)
    {
        return res.status(401).json({message: "Unauthorized HTTP, Token not provided"})
    }

    const jwtToken = token.replace("Bearer", "").trim();

    try {
        const isVerified = jwt.verify(jwtToken, process.env.SECRET_KEY)
        
        const userData = await User.findOne({email: isVerified.email}).select({passsword: 0 })
        
        req.user = userData
        req.token = token
        req.userID = userData._id
        
        next();
    } catch (error) {
    }

}

module.exports = authForLogin