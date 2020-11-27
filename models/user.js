const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    surname: {
        type: String,
        required: false
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const User = module.exports = mongoose.model('user', userSchema);

module.exports.get = (callback, limit) => {
    User.find(callback).limit(limit);
}