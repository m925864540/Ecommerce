const router = require('express').Router();
module.exports= router
const Cart = require("../models/cart");
const {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} = require("./verifyToken");
/***
 * All user can create cart
 * Only admin can view all carts
 */
/**
 * Create a cart
 */
router.post("/", verifyTokenAndAuth, async (req, res) => {
  //Take every in the body, assuming no mistake made.
  //Can be modify later to check not nulls.
  const newCart = new Cart(req.body);

  try {
    const cartToBeSaved = await newCart.save();
    return res.status(200).json(cartToBeSaved);
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * Update a cart
 */
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    return res.status(200).json(updatedCart);
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * Delete a cart
 */
router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    return res.status(200).json("Cart has been deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * Get user cart by ID
 * We get user id instead of cart id.
 */
router.get("/find/:userId", verifyTokenAndAuth, async (req, res) => {
  try {
    //Return only 1 cart.
    const cart = await Cart.findOne({user_ID: req.params.userId});  //CHECK
    return res.status(200).json(cart);
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * Get all cart
 */
router.get('/find', verifyTokenAndAdmin, async(req, res)=>{
    try{
        const allCarts = await Cart.find()
        return res.status(200).json(allCarts)
    }catch(err){
        return res.status(500).json(err)
    }
})