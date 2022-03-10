const jwt = require('jsonwebtoken')

/**
 * Middleware to verify jwt token
 */
const verifyToken= (req, res, next)=>{
    const authHeader = req.headers.token    //correspond to postman header key name
    if(authHeader){
        const token = authHeader.split(" ")[1]
        // const decoded = jwt.verify(token, secret);
        // console.log(decoded.foo);                    //These two line are equivalent to code below.

        //process.env.JWT_SECRETKEY
        jwt.verify(token, "abc123", (err,user)=>{  //In the callback, we can name the second parameter anything, so 'user' contains what is define in jwt.sign, which is id and idAdmin.
            if(err){
                return res.status(403).json("Token is not valid")   //403- has token but not valid.
            }
            //req.user is empty so we assign user(user._id, isAdmin) to it.
            req.user = user
            next()
        })
    }else{
        return res.status(401).json("You are not authenticated") //401 - not authenticated
    }
}

const verifyTokenAndAuth= (req, res, next)=>{
    verifyToken(req, res, ()=>{ //verifyToken function will executes first, then the later callback function.
        //Both user and admin can continue.
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(403).json("You are not allowed to do that.")
        }
    })
}

const verifyTokenAndAdmin= (req, res, next)=>{
    verifyToken(req, res, ()=>{ //verifyToken function will executes first, then the later callback function.
        //Only admin can continue
        if(req.user.isAdmin){
            next()
        }else{
            return res.status(403).json("You are not allowed to do that.")
        }
    })
}



module.exports= {verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin}