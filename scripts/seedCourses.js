/**
 * Script para popular a collection
 * courses no MongoDB.
 */

const mongoose =
  require('mongoose');

const Course =
  require('../models/course');

const courses =
  require('../data/courses');

async function seed() {

  await mongoose.connect(
    'mongodb://127.0.0.1:27017/conectaproplus'
  );

  await Course.deleteMany({});

  await Course.insertMany(
    courses
  );

  console.log(
    'Cursos inseridos'
  );

  process.exit();

}

seed();