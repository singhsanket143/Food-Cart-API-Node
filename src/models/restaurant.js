const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    food: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'food'
        }
    ]
});

const restaurantModel = new mongoose.model('Restaurant', restaurantSchema);

module.exports = restaurantModel;