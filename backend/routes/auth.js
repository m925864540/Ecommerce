const express = require("express");
const router = express.Router();
const CryptoJS = require("crypto-js");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

/**
 * Register an user
 */
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  
  if (!username) {
    return res.status(400).json("Enter an username");
  }
  if (!email) {
    return res.status(400).json("Enter an email");
  }
  if (!password) {
    return res.status(400).json("Enter a password");
  }

  const newUser = new User({
    username: username,
    email: email,
    password: CryptoJS.AES.encrypt(
      //Encrypt user password using crypto-js
      password,
      process.env.PASSWORD_SECRECT
    ).toString(),
  });

  //Send the above info to our mongo db. 200= success, 201=sucess add.
  try {
    const userToBeSave = await newUser.save();
    return res.status(201).json(userToBeSave);
  } catch (err) {
    return res.status(400).json(err);
  }
});

/**
 * Login an user
 */
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  //Check input is null
  if (!username) {
    return res.status(400).json("Enter an username");
  }
  if (!password) {
    return res.status(400).json("Enter an password");
  }

  try {
    const user = await User.findOne({ username });

    //Check if user with this email exist in db.
    if (!user) {
      return res.status(401).json("Invalid username or password."); //no user with such email exist
    }
    const hashedPassword = CryptoJS.AES.decrypt(
      //Decrypt user password
      user.password,
      process.env.PASSWORD_SECRECT
    );
    const passwordToString = hashedPassword.toString(CryptoJS.enc.Utf8); //turn password to String.

    if (passwordToString != password) {
      return res.status(401).json("Invalid username or password."); //password does not match.
    }

    // username and password both matched, create jwt for user.
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRETKEY,
      {expiresIn:"1d"}  
    );

    // console.log('._doc', user)
    //If we use user here, result gonna contains more information that we don't need.
    //Here, extract only info from ._doc, which contains info such as id, un, email, password....
    //const pw = user.password, it will store password which we don't want to show.
    //...others contains user info except password.
    const { password: pw, ...others } = user._doc;
    //With ... infront others, it will return key: others, and its value(user info).
    return res.status(200).json({...others, accessToken}); //return object without password information and jwt token
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
