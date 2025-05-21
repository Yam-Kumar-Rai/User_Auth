const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../Middleware/authMiddleware');
const userControllers = require('../controllers/userControllers');


router.get('/dashboard', isAuthenticated, userControllers.getDashboard);


router.get('/food',isAuthenticated, userControllers.getAllFoods);


module.exports = router;
