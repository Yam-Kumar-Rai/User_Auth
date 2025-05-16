const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers');


// root route
router.get('/', (req, res) => {
  res.render('pages/landing');
});


// Signup
router.get('/signup', authControllers.getSignup);
router.post('/signup', authControllers.postSignup);


// Email verification
router.get('/verify-email', authControllers.verifyEmail);


// Login
router.get('/login', authControllers.getLogin);
router.post('/login', authControllers.postLogin);


// Forgot and reset password routes
router.get('/forgot-password', authControllers.getForgotPassword);
router.post('/forgot-password', authControllers.forgotPassword);
router.get('/reset-password', authControllers.getResetPassword);
router.post('/reset-password', authControllers.resetPassword);


module.exports = router;