const mongoose = require("mongoose");
const mongoUri = "mongodb://localhost:27017/tekstores";
const {Product} = require("./Product")
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{console.log("db mongo connected")}).catch(err=>console.log(err));
const db = mongoose.connection;

const getAllProducts = () => {
return Product.find()
};

/*const add = (data)=>{
  return Product.create(d)
}

const update = (id,data)=>{
  return Product.update({id},{data})
}
*/
module.exports = {
  db,
  getAllProducts
};
