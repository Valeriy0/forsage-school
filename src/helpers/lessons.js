export const course1 = {
  timeStart: '', // время старта курса
  title: 'Start a business with Forsage',  // название всего курса
  lessons: [
    // 1 урок
    {
      title: 'Start a business with Forsage',
      // слайды , в 1ом уроке
      slides: [
        {
          title: '',
          renderContent: () => {
            return null;
          },
          renderImg: () => {
            return (
              <div>
                <img src="" />
              </div>
            )
          }

        }
      ],
      test: [
        {

        }
      ]

    },
    // 2 урок
    {
      title: 'Start a business with Forsage',
      slides: [
        {
          title: '',
          renderContent: () => {
            return null;
          },
          renderImg: () => {
            return (
              <div>
                <img src="" />
              </div>
            )
          }

        }
      ],
      test: [
        {

        }
      ]

    },

  ]
};

export const course2 = {

};



export const allCourses = [
  course1,
  course2
];

