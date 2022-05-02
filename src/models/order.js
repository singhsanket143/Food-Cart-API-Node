const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    food: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Food'
        }
    ],
    status: {
        type: String,
        required: true
    }
});

const orderModel = new mongoose.model('Order', orderSchema);

module.exports = orderModel;
