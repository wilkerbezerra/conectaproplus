const { getCourseBySlug } = require('../controllers/courseController');
const Course = require('../models/course');
jest.mock('../models/course');

describe(
  'getCourseBySlug',
  () => {

    test(
      'deve retornar um curso existente',
      async () => {

        Course.findOne
          .mockResolvedValue({
            slug: 'informatica',
            name: 'Informática',
            lessons: []
          });

        const course =
          await getCourseBySlug(
            'informatica'
          );

        expect(course)
          .toBeDefined();

        expect(course.slug)
          .toBe(
            'informatica'
          );

      }
    );

    test(
      'deve lançar erro quando o curso não existir',
      async () => {

        Course.findOne
          .mockResolvedValue(
            null
          );

        await expect(
          getCourseBySlug(
            'curso-inexistente'
          )
        ).rejects.toThrow(
          'Curso não encontrado'
        );

      }
    );

    test(
      'deve possuir estrutura mínima necessária',
      async () => {

        Course.findOne
          .mockResolvedValue({

            slug:
              'informatica',

            name:
              'Informática',

            lessons: [
              {
                number: '01'
              }
            ]

          });

        const course =
          await getCourseBySlug(
            'informatica'
          );

        expect(
          course.name
        ).toBeDefined();

        expect(
          Array.isArray(
            course.lessons
          )
        ).toBe(true);

      }
    );

  }
);