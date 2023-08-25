const express = require("express")

let router = express.Router();

// Import Middleware
const authController = require('../Controllers/authControllers')

// POST Requests
router.post("/signup", authController.signup);                  // No middleware in Signup
router.post("/login", authController.login); 
router.post("/update",authController.update);  
router.get('/showuser/:email', authController.showUser);
router.delete('/delete/:email', authController.delete);

module.exports = router;