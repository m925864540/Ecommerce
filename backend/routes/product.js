const router = require("express").Router();
module.exports = router;
const Product = require("../models/product");
const {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} = require("./verifyToken");
/***
 * Only admin in can modify products.
 */
/**
 * Create a product
 */
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  //Take every in the body, assuming no mistake made.
  //Can be modify later to check not nulls.
  const newProduct = new Product(req.body);

  try {
    const productToBeAdd = await newProduct.save();
    return res.status(200).json(productToBeAdd);
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * Update a product
 */
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    return res.status(200).json(updatedProduct);
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * Delete a product
 */
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json("Product has been deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * Get an product by ID
 * verifyTokenAndAdmin removed to access from frontend, might need to add later.
 */
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * Get all products.
 */
router.get("/", async (req, res) => {
  //req.query.'new' correspond to the name of the query in postman params. Ex: new=true
  const qNew = req.query.new;
  const qCategory = req.query.category;
  console.log(qCategory)
  try {
    let product;
    if (qNew) {
      //Products is sorted by newest creation.
      products = await Product.find().sort({ _id: -1 }).limit(3);
    } else if (qCategory) {
      products = await Product.find({
        category: {        //If categories is inside Array define in Product models, fetch it.
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json(err);
  }
});
