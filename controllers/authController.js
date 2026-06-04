// controllers/authController.js

const User = require('../models/user');
const bcrypt = require('bcrypt');
const Course = require('../models/course');
const messages = require('../config/messages');

exports.showLogin = (req, res) => {

  res.render('auth/login');

};

exports.showRegister = (req, res) => {

  res.render('auth/cadastro');

};

exports.showPortal = async (req, res) => {

  try {

    const courses =
      await Course.find();

    res.render(
      'layouts/portal',
      {
        courses
      }
    );

  } catch (error) {

    console.error(error);

    res.status(500).send(
      'Erro ao carregar cursos'
    );

  }

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
      await User.findOne({
        email
      });

    if (existingUser) {

      return res.send(
        messages.EMAIL_ALREADY_EXISTS
      );

    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    await User.create({

      fullName,
      email,
      password: hashedPassword

    });

    res.redirect('/');

  } catch (error) {

    console.error(error);

    res.send(
      messages.REGISTER_ERROR
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
        messages.INVALID_CREDENTIALS
      );

    }

    const isValidPassword =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isValidPassword) {

      return res.send(
        messages.INVALID_CREDENTIALS
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
      messages.LOGIN_ERROR
    );

  }

};