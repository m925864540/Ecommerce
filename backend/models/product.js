const mongoose = require('mongoose')

//Create a mongo shema
const ProductScheme = new mongoose.Schema(
    {   //Properties
        title:{type: String, required: true, unique: true},
        description: {type: String, required: true},
        image: {type: String, required: true,},
        category:{type: Array},    //product can have more than 1 cate, size, and color.
        size:{type: Array},
        color:{type: Array},
        price:{type: Number, default: false},
        inStock:{type: Boolean, default: true}
    },{timestamps:true} //Mongo provides create and update at times.
)

//(modelName, schema)
module.exports= mongoose.model("product", ProductScheme)