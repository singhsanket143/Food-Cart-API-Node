const express = require("express");

const router = express.Router();
const helpController = require("../../controllers/helpController");
const foodController = require("../../controllers/foodController");
const restaurantController = require("../../controllers/restaurantController");

router.get("/help", helpController.helpDetails);

router.post("/food", foodController.create);
router.delete("/food/:id/:restaurantId", foodController.destroy);

router.post("/restaurant", restaurantController.create);
router.delete("/restaurant/:id", restaurantController.destroy);
router.get("/restaurant/:id", restaurantController.getAllFoodItems);

module.exports = router;