const express = require('express');
const router = express.Router();
const { isAdmin } = require('../Middleware/authMiddleware');
const adminControllers = require('../controllers/adminControllers');


router.get('/dashboard', isAdmin, adminControllers.getDashboard);


router.get('/add-food',isAdmin, adminControllers.getAddFood);
router.post('/add-food',isAdmin, adminControllers.postAddFood);


router.get('/food',isAdmin, adminControllers.getAllFoods);


router.get('/edit-food/:id',isAdmin, adminControllers.getEditFood);
router.post('/edit-food/:id',isAdmin, adminControllers.postEditFood);
router.post('/delete-food/:id',isAdmin, adminControllers.deleteFood);




module.exports = router;
