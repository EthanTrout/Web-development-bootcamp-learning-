const mongoose = require('mongoose');
 
    main().catch(err => console.log(err));
    async function main() {
      await mongoose.connect('mongodb://127.0.0.1:27017/movieApp');
      console.log('connected to db MovieApp')
    }
    const movieSchema = new mongoose.Schema({
      title: String,
      year: Number,
      score: Number,

    });

    const Movie = mongoose.model("Movie",movieSchema);

    

//Movie.insertMany([
 //   {title: "Amelie", year:2001, score:8.3, rating: "R"},
 //   {title: "Alien", year:1979, score:8.1, rating: "R"},
  //  {title: "The Iron Giant", year:1999, score:7.5, rating: "PG"}
//])

//then(data => {
//console.log("It worked")
//console.log(data)
//})