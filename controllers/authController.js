// controllers/authController.js

const User = require('../models/user');
const bcrypt = require('bcrypt');
const courses = require('../data/courses');

exports.showLogin = (req, res) => {

  res.render('auth/login');

};

exports.showRegister = (req, res) => {

  res.render('auth/cadastro');

};

exports.showPortal = (req, res) => {

  res.render('layouts/portal', {
    courses
  });

};

exports.logout = (req, res) => {

  req.session.destroy(() => {

    res.redirect('/');

  });

};

exports.register = async (req, res) => {

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

};

exports.login = async (req, res) => {

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

    res.send(
      'Erro ao realizar login'
    );

  }

};