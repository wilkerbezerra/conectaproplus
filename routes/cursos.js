var express = require('express');
var router = express.Router();

const isAuthenticated =
  require('../middleware/auth');

const courseController =
  require('../controllers/courseController');

router.get(
  '/cursos/:slug/aula/:numero',
  isAuthenticated,
  courseController.showLesson
);

module.exports = router;
