const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDb connected Successfully'))
    .catch(err => console.log('Could not connect to mongoDB', err));

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
});

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
});

const Product = mongoose.model('Product', ProductSchema);

function createProductNameIndex() {
    // Your implementation here
    Product.collection.createIndex({ name: 1 })
        .then(() => console.log('Index Created Successfully'))
        .catch(() => { 'Error! Could not create the Index.' })
};

createProductNameIndex();