const express = require('express');
const { Category, Product } = require('../Day-23/day-23');
const app = express();

app.use(express.json());

async function createProductRoute(req, res) {
    // Your implementation here
    const { name, price, quantity, category } = req.body;
    const result = new Product({ name, price, quantity, category });
    const re = await result.save();
    if (!re) {
        res.status(500).send('Could not add the product to DB.');
    }

    res.status(201).send('Product is created:', result);
}
app.post('/createProduct', createProductRoute);

async function getAllProductsRoute(req, res) {
    // Your implementation here
    const products = await Product.find();
    if (!products) {
        res.status(500).send('Could not fetch the products from DB.');
    }

    res.status(201).send(products);
}
app.get('/getAllProducts', getAllProductsRoute);

async function updateProductRoute(req, res) {
    // Your implementation here
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!product) {
        res.status(500).send('Could not update the product.');
    }

    res.status(201).send('Products Updated');
}
app.put('/updateProduct/:productId', updateProductRoute);

async function deleteProductRoute(req, res) {
    // Your implementation here
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
        res.status(500).send('Could not delete the product.');
    }

    res.status(201).send('Product Deleted:');
}
app.delete('/deleteProduct/:productId', deleteProductRoute);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => { console.log('Sevrer is running at PORT', PORT) });