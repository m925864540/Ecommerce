const router = require("express").Router();
const User = require("../models/user");
const {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} = require("./verifyToken");

/**
 * Update user by id
 */
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  //Encrypt password first because user might change it
  // console.log('password: ', req.body.password)
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      //Encrypt user password using crypto-js
      password,
      process.env.PASSWORD_SECRECT
    ).toString();
  }

  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, //Take what is in req.body and set it again. Don't return updated user
      },
      { new: true }
    ); //handles the return to updateUser
    return res.status(200).json(updateUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * Delete an user by id
 */
router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json("User has been deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * Get an user by id, only admin can see the use
 */
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password: pw, ...others } = user._doc;
    return res.status(200).json(others);
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * Get all user, only admin can see the use
 */
router.get("/find", verifyTokenAndAdmin, async (req, res) => {
  //req.query.'new' correspond to the name of the query in postman params. Ex: new=true
  const query = req.query.new;
  try {
    //Without .sort, it is gonna return first x user, with .sort by id=-1, it return newest create user
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * Get us the total of user register in 1 month.
 */
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date(); //Get current date and time
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1)); //last year today.

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },    //user with createAt greater than last year today.
      {
          $project:{
              month: {$month: "$createdAt"}
          },
      },
      {
          $group:{
              _id: "$month",
              total: {$sum:1}   //Sum up all register user.
          },
      },
    ]); 
    return res.status(200).json(data)
  } catch (err) {
    return res.status(500).json(err);
  }
});
module.exports = router;
