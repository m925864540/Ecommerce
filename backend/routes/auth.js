const express = require('express')
const router = express.Router()
const User = require('../models/user')

/**
 * Register an user
 */
router.post('/register', async (req, res)=>{

    const {username, email, password} = req.body
    if(!username){
        return res.status(400).json("Enter an username")
    }
    if(!email){
        return res.status(400).json("Enter an email")
    }
    if(!password){
        return res.status(400).json("Enter a password")
    }

    const newUser = new User({
        username: username,
        email: email,
        password: password
    });

    //Send the above info to our mongo db. 200= success, 201=sucess add.
    try{
        const userToBeSave= await newUser.save()
        return res.status(201).json(userToBeSave)
    }catch(err){
        return res.status(400).json(err)
    }
})


module.exports= router
