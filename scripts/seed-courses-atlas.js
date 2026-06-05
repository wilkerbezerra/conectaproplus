require('dotenv').config();

const mongoose = require('mongoose');

const Course = require('../models/course');
const courses = require('../data/courses');

async function seedCourses() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log('MongoDB conectado');

    // Remove cursos existentes
    await Course.deleteMany({});

    // Insere os cursos
    await Course.insertMany(courses);

    console.log(`${courses.length} cursos inseridos com sucesso`);

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedCourses();