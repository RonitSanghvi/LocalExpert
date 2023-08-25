const express = require("express")

let router = express.Router();

// Import Middleware
const destinationController = require('../Controllers/destinationControllers')

// POST Requests
router.get("/alldestinations", destinationController.getAllDestinations)
router.post("/adddestination", destinationController.addDestination);
router.post("/updatedestination", destinationController.updateDestination);
router.get("/showdestination/:_id", destinationController.showDestination);
router.delete("/deletedestination/:_id", destinationController.deleteDestination);

module.exports = router;