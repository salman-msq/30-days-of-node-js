const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/myDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDb connected Successfully'))
    .catch(err => console.log('Could not connect to mongoDB', err));

const User = new mongoose.Schema({
    username: String,
    email: String
});
const userModel = mongoose.model('userModel', User);

async function getAllUsers(req, res) {
    const result = await userModel.find();

    if (!result) {
        res.status(500).json('Error! Data is not fectched from the Database.');
    }

    res.json(result);
}

app.get('/users', getAllUsers);
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => { console.log('Server is running at PORT', PORT) });