const mongoose = require("mongoose");

//Create a mongo shema
const UserScheme = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    firstName: {type: String, required: false},
    lastName: {type: String, required: false},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }, //User created default will not be admin.
    contact: {type: String, required: false},
    location: {type: String, required: false},
  },
  { timestamps: true } //Mongo provides create and update at times.
);

//(modelName, schema)
module.exports = mongoose.model("user", UserScheme);
