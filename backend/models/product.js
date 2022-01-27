const mongoose = require('mongoose')

//Create a mongo shema
const ProductScheme = new mongoose.Schema(
    {   //Properties
        title:{type: String, required: true, unique: true},
        description: {type: String, required: true},
        image: {type: String, required: true,},
        category:{type: Array},    //product can have more than 1 cate.
        size:{type: String},
        color:{type: String},
        price:{type: Number, default: false},
    },{timestamps:true} //Mongo provides create and update at times.
)

//(modelName, schema)
module.exports= mongoose.model("product", ProductScheme)