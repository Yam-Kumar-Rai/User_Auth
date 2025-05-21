const db = require('../config/db');


exports.getDashboard = (req, res) => {
  res.render('users/dashboard', { message: null });
};


exports.getAllFoods = async (req, res) => {
  try {
    const foods = await db.any('SELECT * FROM food_items ORDER BY created_at DESC');
    res.render('users/food', { foods });
  } catch (err) {
    console.error('❌ Error fetching food items:', err);
    res.status(500).send('Server Error');
  }
};
