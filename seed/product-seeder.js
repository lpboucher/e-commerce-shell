const Product = require('../models/Product');
const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.connect(keys.mongoURI);

var products = [
    new Product({
    imagePath: "https://4.imimg.com/data4/LS/TR/MY-12309543/designer-candle-500x500.jpg",
    title: "Amsterdam-scented candle",
    description: "Candle with scented that remind of summer in Amsterdam",
    price: 35
}),
new Product({
    imagePath: "https://3.imimg.com/data3/KH/UF/MY-7578685/designer-candle-500x500.jpeg",
    title: "Las Vegas-scented candle",
    description: "Candle with scented that remind of parties in Las Vegas",
    price: 60
}),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit () {
    console.log("Seed data saved!");
    mongoose.disconnect();
}
