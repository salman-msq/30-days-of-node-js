const mongoose = require('mongoose');
const app = require('express')();
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

async function getProductStatistics() {
    // Your implementation here
    const pipeline = [{
        $group: {
            _id: null,
            totalProducts: { $sum: 1 },
            averagePrice: { $avg: '$price' },
            highestQuantity: { $max: '$quantity' }
        }
    }];

    const result = await Product.aggregate(pipeline);
    return result;
}

app.get('/', async (req, res) => {
    const statistics = await getProductStatistics();
    if (!statistics) {
        res.status(501).send('could not fetch the statistics of products');
    }

    console.log(statistics);
    res.send(statistics);
});

const PORT = 7000;
app.listen(PORT, () => console.log('Server is running on PORT ', PORT));