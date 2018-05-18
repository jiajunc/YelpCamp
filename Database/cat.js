var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat",catSchema);

// var george= new Cat({
//     name:"George",
//     age:11,
//     temperament:"Grouchy"
// });

// george.save(function(err,cat){
//     if(err){
//         console.log("something wrong");
//     }
//     else{
//         console.log("We save a cat to db:")
//         console.log(cat);
//     }
// });

Cat.create({
    name:"Snow",
    age:15,
    temperament:"Bland"
},function(err,cat){
    if(err){
        console.log("Oh NO");
    }else{
        console.log("All the cats");
        console.log(cat);
    }
});

Cat.find({},function(err,cats){
    if(err){
        console.log("Oh NO");
    }else{
        console.log("All the cats");
        console.log(cats);
    }
})
