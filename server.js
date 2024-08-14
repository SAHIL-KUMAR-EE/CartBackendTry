const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Use MONGODB_URL for online database
const mongoURL = process.env.MONGODB_URL_LOCAL
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  price: Number,
});

const Product = mongoose.model('Product', productSchema);

// Get all products
app.get('/products', async (req, res) => {
  const products = await Product.find();
  console.log('Product Fetched Successfully');
  res.json(products);
});

// Add a new product
app.post('/products', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  console.log('Product added');
  res.json(newProduct);
});

// Update a product by ID
app.put('/products/:id', async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  console.log('Product updated');
  res.json(updatedProduct);
});

// Delete a product by ID
app.delete('/products/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  console.log('Product deleted');
  res.json({ message: 'Product deleted' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
