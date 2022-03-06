const router = require("express").Router();
module.exports = router;
const Order = require("../models/order");
const {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} = require("./verifyToken");
/***
 * All user can create order
 * Only admin can view all orders.
 */
/**
 * Create an order
 */
router.post("/", async (req, res) => {
  //Take every in the body, assuming no mistake made.
  const newOrder = new Order(req.body);

  try {
    const orderToBeSaved = await newOrder.save();
    return res.status(200).json(orderToBeSaved);
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * Update an order
 *
 */
router.put("/:id", async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    return res.status(200).json(updatedOrder);
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * Delete a order
 */
router.delete("/delete/:id", async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    return res.status(200).json("Order has been deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * Delete all order
 */
 router.delete("/delete", verifyTokenAndAuth, async (req, res) => {
  try {
    await Order.remove({});
    return res.status(200).json("All Order has been deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * Get user order by ID
 * We get user id instead of cart id.
 */
router.get("/find/:userId", verifyTokenAndAuth, async (req, res) => {
  try {
    //User can have more than 1 orders.
    const orders = await Order.findOne({ user_ID: req.params.userId }); //CHECK
    return res.status(200).json(orders);
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * Get all order
 */
router.get("/find", verifyTokenAndAdmin, async (req, res) => {
  try {
    const allOrders = await Order.find();
    // console.log("Order size: ", allOrders.length)
    return res.status(200).json(allOrders);
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * Get monthly income
 */
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(date.setMonth(lastMonth.getMonth() - 1));//month before last month.

  try {
    const income = await Order.aggregate([
        {$match:{createdAt:{$gte: previousMonth}}},
        {
          $project: {
            month:{$month:"$createdAt"},
            sales: "$amount",
          },
        },
        {
          $group:{
            _id: "$month",
            total:{$sum: "$sales"}
          },
        },
    ])
    return res.status(200).json(income);
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * Get total income
 */
 router.get("/allIncome", verifyTokenAndAdmin, async (req, res) => {
  
  try {
    const allOrders = await Order.find();
    console.log(allOrders)
    let total=0;
    for(let i=0; i< allOrders.length; i++){
      total += allOrders[i].amount;
    }
    return res.status(200).json(total);
  } catch (err) {
    return res.status(500).json(err);
  }
});