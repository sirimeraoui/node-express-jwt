const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please, enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please, enter a valid email'],
    },
    password: {
        type: String,
        required: [true, 'Please, enter a password'],
        minlength: [6, 'The password must be at least 6 characters long']

    },
});

//fire a function after doc saved to db
userSchema.post('save', function (doc, next) {
    console.log('user after he was saved to the db', doc);
    next();
});

//fire a function before doc saved to db
userSchema.pre('save', function (next) {
    console.log('user about to be created and saved to the db', this);
    next();
});

const User = mongoose.model('user', userSchema);

module.exports = User; 