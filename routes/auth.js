
const express = require('express');

const router =
  express.Router();

const isAuthenticated =
  require('../middleware/auth');

const authController =
  require('../controllers/authController');

router.get(
  '/',
  authController.showLogin
);

router.get(
  '/cadastro',
  authController.showRegister
);

router.get(
  '/portal',
  isAuthenticated,
  authController.showPortal
);

router.get(
  '/logout',
  authController.logout
);

router.post(
  '/cadastro',
  authController.register
);

router.post(
  '/',
  authController.login
);

module.exports = router;