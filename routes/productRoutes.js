const mongoose = require('mongoose');

const Product = mongoose.model('products');

module.exports = (app) => {
    app.get('/api/product', async (req, res) => {
        const products = await Product.find();
        console.log(products);
        res.send(products);
    });
}