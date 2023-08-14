const express = require('express');
const cors =require('cors');
const port = 1000;
const app = express();
app.use(express.json())
//uncomment to use mongodb
 const db = require('./mongoDb')
// uncomment to use MYSQL 
// const db = require("./Mysql")
app.use(cors());
// const {getAllProducts} = require("./mongoDb/index")



app.get('/api/products',(req,res)=> {
   db.getAllProducts().then((result)=>{
      console.log(result);
    res.status(200).send(result)
   }).catch((error)=>{
    console.log(error)
   })
})




app.listen(port, ()=>{
console.log(`listening on ${port}`);
})