const express = require('express');
const mongoose = require('mongoose');
require('./models/Product');

const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/productRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);