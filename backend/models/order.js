const mongoose = require('mongoose')

//Create a mongo shema
const OrderScheme = new mongoose.Schema(
    { 
        user_ID:{type: String, required: true}, 
        product: [
            {
                productID:{type: String},
                quantity: {type: Number, default: 1},
            }
        ],
        amount: {type: Number, required: true},
        address: {type: Object, required: true}, //Stripe will return an object when we make an order.
        status: {type: String, default: "Pending"}
    },{timestamps:true} 
)

//(modelName, schema)
module.exports= mongoose.model("order", OrderScheme)