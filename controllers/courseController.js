
const courses =
  require('../data/courses');

exports.showLesson =
  (req, res) => {

    const {
      slug,
      numero
    } = req.params;

    const course =
      courses.find(
        c => c.slug === slug
      );

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

  };