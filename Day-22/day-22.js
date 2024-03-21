const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDb connected Successfully'))
    .catch(err => console.log('Could not connect to mongoDB', err));

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});

const Product = mongoose.model('Product', ProductSchema);

async function createProduct(product) {
    // Your implementation here
    const addProduct = new Product(product);
    const result = await addProduct.save();

    if (!result) {
        console.log('Error to add product.');
        return;
    }

    console.log('Product added successfully:\n', result);
}

async function getAllProducts() {
    // Your implementation here
    const findProdcuts = await Product.find();
    if (!findProdcuts) {
        console.log('Error to find products.');
        return;
    }

    console.log('Products are:\n', findProdcuts);
}

async function updateProduct(productId, updatedProduct) {
    // Your implementation here
    const product = await Product.findByIdAndUpdate(productId, updatedProduct, { new: true });

    if (!product) {
        console.log('Product does not exist.');
        return;
    }

    console.log('Product updated successfully.');
}

async function deleteProduct(productId) {
    // Your implementation here
    const deleted = await Product.findByIdAndDelete(productId);

    if (!deleted) {
        console.log('Product does not exist.');
        return;
    }

    console.log('Product deleted successfully.');
}

createProduct({ name: 'RAM', price: 3000, quantity: 11 });
getAllProducts();
updateProduct('65d753127dbee0abd170ec29', { quantity: 5 });
deleteProduct('65d753a0f38725b279000972');
