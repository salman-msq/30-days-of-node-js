const mongoose = require('mongoose');

function connectToMongoDB() {
    // Your implementation here
    mongoose.connect('mongodb://localhost/myDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;

    db.on('error', (err) => {
        console.log('MongoDB connection error', err);
    });

    db.once('open', () => {
        console.log('MongoDB connected successfully....');
    });
};

connectToMongoDB();