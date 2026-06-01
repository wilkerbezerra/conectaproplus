var express = require('express');
var router = express.Router();
const courses = require("../data/courses")
const User = require('../models/user')
const bcrypt = require('bcrypt');
const isAuthenticated =
  require('../middleware/auth');

router.get('/', function(req, res, next) {
  res.render('auth/login');
});

router.get('/cadastro', function(req, res, next) {
  res.render('auth/cadastro');
});

router.get('/portal',isAuthenticated, function(req, res, next) {

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

    const hashedPassword =
  await bcrypt.hash(password, 10);

await User.create({
  fullName,
  email,
  password: hashedPassword
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

  try {

  

  const {
    email,
    password
  } = req.body;

  const user =
  await User.findOne({
    email
  });

if (!user) {

  return res.send(
    'Email ou senha inválidos'
  );

}

const isValidPassword =
  await bcrypt.compare(
    password,
    user.password
  );

if (!isValidPassword) {

  return res.send(
    'Email ou senha inválidos'
  );

}

  req.session.user = {

    id: user._id,
    name: user.fullName

  };

  res.redirect('/portal');
} catch (error) {

    console.error(error);

    res.status(500).send(
      'Erro interno do servidor'
    );

  }
});

module.exports = router;
