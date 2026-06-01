// controllers/courseController.js

const Course =
  require('../models/course');

exports.showLesson =
  async (req, res) => {

    try {

      const {
        slug,
        numero
      } = req.params;

      const course =
        await Course.findOne({
          slug
        });

      if (!course) {

        return res
          .status(404)
          .send(
            'Curso não encontrado'
          );

      }

      const lesson =
        course.lessons.find(
          l => l.number === numero
        );

      if (!lesson) {

        return res
          .status(404)
          .send(
            'Aula não encontrada'
          );

      }

      res.render(
        'layouts/course-lesson',
        {
          courseName:
            course.name,

          lessonNumber:
            lesson.number,

          lessonTitle:
            lesson.title,

          videoUrl:
            lesson.videoUrl,

          stylesheet:
            course.stylesheet,

          lessons:
            course.lessons
        }
      );

    } catch (error) {

      console.error(error);

      res.status(500).send(
        'Erro ao carregar aula'
      );

    }

  };