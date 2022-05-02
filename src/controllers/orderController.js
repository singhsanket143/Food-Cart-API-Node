const OrderService = require("../services/orderService");

const addItem = async (req, res) => {
    try {
        const order = await OrderService.createOrder(req.body);
        return res.status(200).json({
            message: 'Added item to order',
            success: true,
            data: order
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Somwething went wrong',
            success: false
        })
    }
}

const getOrder = async (req, res) => {
    try {
        const order = await OrderService.getOrder(req.params.id);
        return res.status(200).json({
            message: 'Order returned',
            success: true,
            data: order
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Somwething went wrong',
            success: false
        })
    }
}

const orderTotal = async (req, res) => {
    try {
        const price = await OrderService.totalPrice(req.params.id);
        return res.status(200).json({
            message: 'price returned',
            success: true,
            data: price
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Somwething went wrong',
            success: false
        })
    }
}

const updateOrder = async (req, res) => {
    try {
        const order = await OrderService.updateOrder(req.params.id, req.body);
        return res.status(200).json({
            message: 'order updated',
            success: true,
            data: order
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Somwething went wrong',
            success: false
        })
    }
}

const deleteItemFromOrder = async (req, res) => {
    try {
        const order = await OrderService.deleteItemFromOrder(req.body);
        return res.status(200).json({
            message: 'updated item in order',
            success: true,
            data: order
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Somwething went wrong',
            success: false
        });
    }
}

module.exports = {
    addItem,
    getOrder,
    orderTotal,
    updateOrder,
    deleteItemFromOrder
}