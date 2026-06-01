const mongoose =
  require('mongoose');

const LessonSchema =
  new mongoose.Schema({

    number: String,

    title: String,

    videoUrl: String,

    url: String

  });

const CourseSchema =
  new mongoose.Schema({

    slug: {
      type: String,
      required: true,
      unique: true
    },

    name: {
      type: String,
      required: true
    },

    shortName: {
      type: String,
      required: true
    },

    image: String,

    firstLesson: String,

    stylesheet: String,

    lessons: [LessonSchema]

  });

module.exports =
  mongoose.model(
    'Course',
    CourseSchema
  );