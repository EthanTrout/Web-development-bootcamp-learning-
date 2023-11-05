const mongoose = require('mongoose');
 
    main().catch(err => console.log(err));
    async function main() {
      await mongoose.connect('mongodb://127.0.0.1:27017/ShopApp');
      console.log('connected to db MovieApp')
    }
    const movieSchema = new mongoose.Schema({
      title: String,
      year: Number,
      score: Number,

    });

    const productSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true,

        
        },
        price:Number,

    })

    const Product = mongoose.model("Product",productSchema);

    const bike = new Product({name:"Moutain Bike",price:599})

