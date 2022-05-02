const crud = require("../services/crudService");
const Restaurant = require("../models/restaurant");

const create = async (req, res) => {
    try {
        const restaurant = await crud.create(Restaurant, req.body);
        return res.status(200).json({
            message: 'Successfully added new Restaurant',
            success: true,
            data: restaurant
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Something went wrong',
            success: false
        })
    }
}

const destroy = async (req, res) => {
    try {
        const restaurant = await crud.destroy(Restaurant, req.params.id);
        return res.status(200).json({
            message: 'Successfully delete a Restaurant',
            success: true,
            data: restaurant
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Something went wrong',
            success: false
        })
    }
}

const getAllFoodItems = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id).populate('food');
        return res.status(200).json({
            message: 'Successfully delete a Restaurant',
            success: true,
            data: restaurant
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Something went wrong',
            success: false
        })
    }
}

module.exports = {
    create,
    destroy,
    getAllFoodItems
}