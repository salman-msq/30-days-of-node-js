const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDb connected Successfully'))
    .catch(err => console.log('Could not connect to mongoDB', err));

const User = new mongoose.Schema({
    username: String,
    email: { type: String, validate: { validator: validation, message: 'Email is not valid' } }
});

function validation(email) {
    return /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(email);
}

const userModel = mongoose.model('userModel', User);
async function addUserWithValidation(user) {
    // Your implementation here
    try {
        const newUser = new userModel(user);
        await newUser.validate();
        await newUser.save();
        console.log('User added successfully');
    } catch (error) {
        console.log('Error:', error.message);
    }

};

addUserWithValidation({ username: 'john_doe', email: 'john_doe@email.com' });
addUserWithValidation({ username: 'john_doe', email: 'invalid-email' });