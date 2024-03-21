const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDb connected Successfully'))
    .catch(err => console.log('Could not connect to mongoDB', err));

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
});

const Category = mongoose.model('Category', CategorySchema);

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
});

const Product = mongoose.model('Product', ProductSchema);

// async function getProductsPopulatedWithCategory() {
//     // Your implementation here
//     const result = await Product.find({}).populate('category').exec();
//     if (!result) {
//         console.log('Error! Could not fecth the data.');
//         return;
//     }

//     console.log('The data with the category details:\n', result);
// }

// getProductsPopulatedWithCategory();

// async function createData() {
//     const cat = await Category.create({ name: 'Electronics' });
//     await Product.create({ name: "SDD", price: 3000, quantity: 20, category: cat._id });
//     await Product.create({ name: "Mouse", price: 1000, quantity: 10, category: cat._id });
//     await Product.create({ name: "Processor", price: 30000, quantity: 15, category: cat._id });

//     const cat1 = await Category.create({ name: 'Electrical' });
//     await Product.create({ name: "Air Conditioner", price: 25000, quantity: 10, category: cat1._id });
//     await Product.create({ name: "Celieng Fan", price: 1000, quantity: 13, category: cat1._id });
//     await Product.create({ name: "Bulb", price: 300, quantity: 17, category: cat1._id });
// };

module.exports = { Category, Product };
//createData();

