const mongoose = require('mongoose');

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

async function addUserToDatabase(user) {
    // Your implementation here
    const addUser = new userModel(user);
    const result = await addUser.save();

    if (!result) {
        console.log('Error!, could not add the user.');
        return;
    }

    console.log('User is successfully added');
}

addUserToDatabase({ username: 'sal_cal', email: 'sal@gamill.com' });
addUserToDatabase({ username: 'keranJam', email: 'keran@yaaho.com' });
addUserToDatabase({ username: 'istaFar', email: 'far@sample.com' });
addUserToDatabase({ username: 'macBook', email: 'mac@example.com' });