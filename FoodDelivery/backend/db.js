const mongoose = require('mongoose');
mongoose.set("strictQuery",true);
main().catch(err => console.log(err));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fooddelivery');
  console.log("Connected to mongoose");
  const fetched_data = await mongoose.connection.db.collection("fooditem");

  fetched_data.find({}).toArray( async function(err,data)
  {
     const foodcategory = await mongoose.connection.db.collection("foodcategory");

     foodcategory.find({}).toArray(function(err,catdata)
     {
         if(err) console.log(err);
         else{
          global.food_items = data;
          global.foodcategory = catdata;
          }
     })
  })

}
module.exports = main;