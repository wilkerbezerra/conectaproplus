var express = require('express');
var router = express.Router();
const courses = require("../data/courses")
const User = require('../models/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('auth/login');
});

router.get('/cadastro', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('auth/cadastro');
});

router.get('/portal', function(req, res, next) {

  res.render('layouts/portal', {
    courses
  });

});

router.get('/logout', (req, res) => {

  req.session.destroy(() => {

    res.redirect('/');

  });

});

router.post('/cadastro', async (req, res) => {

  try {

    const {
      fullName,
      email,
      password
    } = req.body;

    const existingUser =
      await User.findOne({ email });

    if (existingUser) {

      return res.send(
        'Email já cadastrado'
      );

    }

    await User.create({

      fullName,
      email,
      password

    });

    res.redirect('/');

  } catch (error) {

    console.error(error);

    res.send(
      'Erro ao cadastrar usuário'
    );

  }

});

router.post('/', async (req, res) => {

  const {
    email,
    password
  } = req.body;

  const user =
    await User.findOne({

      email,
      password

    });

  if (!user) {

    return res.send(
      'Email ou senha inválidos'
    );

  }

  req.session.user = {

    id: user._id,
    name: user.fullName

  };

  res.redirect('/portal');

});

module.exports = router;
