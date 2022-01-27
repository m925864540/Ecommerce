const mongoose = require('mongoose')

//Create a mongo shema
const CartScheme = new mongoose.Schema(
    /**
     * Cart can have mutliple product or just single product.
     */
    { 
        user_ID:{type: String, required: true},   //all user will have 1 cart
        product: [
            {
                productID:{type: String},
                quantity: {type: Number, default: 1},
            }
        ]
    },{timestamps:true} 
)

//(modelName, schema)
module.exports= mongoose.model("cart", CartScheme)