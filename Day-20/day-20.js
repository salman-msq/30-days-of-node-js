const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/myDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDb connected Successfully'))
    .catch(err => console.log('Could not connect to mongoDB', err));

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
});

const User = mongoose.model('User', UserSchema);

async function averageAgeOfUsers(req, res) {
    // Your implementation here
    try {
        const result = await User.aggregate([{
            $group: { _id: 'averageAge', average: { $avg: '$age' } },
        }]);

        const average = result[0]?.average;
        res.send({ average: average });
    } catch (error) {
        res.status(500).send('Operation Failed');
    }
}

app.get('/average-age', averageAgeOfUsers);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log('Server is running on PORT', PORT));
