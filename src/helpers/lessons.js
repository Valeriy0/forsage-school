export const course1 = {
  timeStart: '2023-04-27T15:00Z', // время старта курса
  title: 'Start a business with Forsage', 
  key: 'start-a-business-with-forsage',
  img: '/img/1lesson/1lesson.png', // название всего курса
  imgMob: '/img/1lesson/1lessonMob.png',
  lessons: [
    // 1 урок
    {
      title: 'Start a business with Forsage',
      icon: '',
      // слайды , в 1ом уроке
      slides: [
        {
          title: 'Forsage is a platform for starting an online business where you can earn from inviting people.',
          renderContent: () => {
            const info = [
              {
                title: [<span>Anyone can start their own business with Forsage. All you need <br className="sm:hidden"/> is a smartphone or a computer with Internet access.</span>],
              },
              {
                title: [<span>Payments go directly from user to user and can be tracked <br className="sm:hidden"/>on the blockchain. The platform has no access to the funds..</span>],
              },
              {
                title: [<span>You can start with $10, and your maximum profit is not limited <br className="sm:hidden"/>and depends only on your activity.</span>],
              },
              {
                title: [<span>Decentralized marketing is powered by reliable smart contract<br className="sm:hidden"/> technology. The contract code is open.</span>],
              }
            ]
            return (
              <div className="flex flex-col space-y-5">
                {info.map((item) => {
                  return (
                  <div className=" flex justify-start items-start space-x-3">
                    <div className="mt-[2px] w-[20px] h-[20px] bg-[#3FF6A3] rounded-full" />
                    <span className="opacity-50 font-light">{item.title}</span>
                  </div>
                  )
                })}
              </div>
            );
          },
          renderImg: () => {
            return (
              <div className="w-full h-full flex items-center justify-center">
                <img className="max-h-[75%]" src="/img/courses/lessons/1/1.png" />
              </div>
            )
          }

        },
        {
          title: 'Cryptocurrency is the money of tomorrow',
          renderContent: () => {
            const info = [
              {
                title: [<>Autonomy</>],
                content: [<>No one can "shut down" the blockchain or ban cryptocurrency.</>],
              },
              {
                title: [<>Accessibility</>],
                content: [<>To create a wallet, all you need is a device with Internet access.</>],
              },
              {
                title: [<>Anonymity</>],
                content: [<>Users can see your digital signature only. They don't know your name or location.</>],
              },
            ]
            return (
              <div className="flex flex-col space-y-5">
                {info.map((item) => {
                  return (
                  <div className="flex flex-col items-start">
                    <span className="opacity-50 font-light">{item.title}</span>
                    <span className="opacity-50 font-light">{item.content}</span>
                  </div>
                  )
                })}
              </div>
            );
          },
          renderImg: () => {
            return (
              <div className="w-full h-full flex items-center justify-center">
                <img className="max-h-full" src="/img/courses/lessons/1/2.png" />
              </div>
            )
          }
        },
        // lesson 1 - slide 3
        {
          title: 'Forsage is not trading',
          renderContent: () => {
            
            return (
              <div className="flex flex-col space-y-5">
                <span className="opacity-50 font-light">
                  Forsage is a network-type business with a clear and transparent economic model that has been successfully operating for 3 years.
                </span>
              </div>
            );
          },
          renderImg: () => {
            return (
              <div className="w-full h-full flex items-center justify-center">
                <img className="max-h-full" src="/img/courses/lessons/1/3.png" />
              </div>
            )
          }

        }
      ],
      test: [
        {
          question: 'How do you earn at Forsage ?',
          trueAnswer: 2,
          clue: 'Forsage is a platform for starting an online business where you can earn money by inviting people.',
          answers: [
            'Activate levels in programs and wait for passive income.',
            'Invite partners to your team and activate levels and programs together.',
            'Wait for income from your upline partner.'
          ]
        }
      ]

    },
    // 2 урок
    {
      title: 'Security',
      icon: '',
      slides: [
        {
          title: '',
          renderContent: () => {
            return null;
          },
          renderImg: () => {
            return (
              <div>
                <img src="/img/1lesson/1lesson.png" />
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
    // 3 урок
    {
      title: 'Crypto wallets',
      icon: '',
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
    // 4 урок
    {
      title: 'Marketing',
      icon: '',
      slides: [
        {
          title: '',
          renderContent: () => {
            return null;
          },
          renderImg: () => {
            return (
              <div>
                <img src="/img/1lesson/1lesson.png" />
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
    // 5 урок
    {
      title: 'Tips for finding new partners',
      icon: '',
      slides: [
        {
          title: '',
          renderContent: () => {
            return null;
          },
          renderImg: () => {
            return (
              <div>
                <img src="/img/1lesson/1lesson.png" />
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
  timeStart: '2023-06-01T16:42Z', // время старта курса
  title: '1324', 
  key: 'start-a-business-with-forsage',
  img: '/img/1lesson/1lesson.png', // название всего курса
  lessons: [
    // 1 урок
    {
      title: 'Start a business with Forsage',
      icon: '',
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
                <img src="/img/1lesson/1lesson.png" />
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
      title: 'Security',
      icon: '',
      slides: [
        {
          title: '',
          renderContent: () => {
            return null;
          },
          renderImg: () => {
            return (
              <div>
                <img src="/img/1lesson/1lesson.png" />
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
    // 3 урок
    {
      title: 'Crypto wallets',
      icon: '',
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
    // 4 урок
    {
      title: 'Marketing',
      icon: '',
      slides: [
        {
          title: '',
          renderContent: () => {
            return null;
          },
          renderImg: () => {
            return (
              <div>
                <img src="/img/1lesson/1lesson.png" />
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
    // 5 урок
    {
      title: 'Tips for finding new partners',
      icon: '',
      slides: [
        {
          title: '',
          renderContent: () => {
            return null;
          },
          renderImg: () => {
            return (
              <div>
                <img src="/img/1lesson/1lesson.png" />
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

export const course3 = {
  timeStart: '2023-06-27T15:00Z', // время старта курса
  title: 'Start a business with Forsage', 
  key: 'start-a-business-with-forsage',
  img: '/img/1lesson/1lesson.png', // название всего курса
  imgMob: '/img/1lesson/1lessonMob.png',
  lessons: [
    // 1 урок
    {
      title: 'Start a business with Forsage',
      icon: '',
      // слайды , в 1ом уроке
      slides: [
        {
          title: 'Forsage is a platform for starting an online business where you can earn from inviting people.',
          renderContent: () => {
            const info = [
              {
                title: [<span>Anyone can start their own business with Forsage. All you need <br className="sm:hidden"/> is a smartphone or a computer with Internet access.</span>],
              },
              {
                title: [<span>Payments go directly from user to user and can be tracked <br className="sm:hidden"/>on the blockchain. The platform has no access to the funds..</span>],
              },
              {
                title: [<span>You can start with $10, and your maximum profit is not limited <br className="sm:hidden"/>and depends only on your activity.</span>],
              },
              {
                title: [<span>Decentralized marketing is powered by reliable smart contract<br className="sm:hidden"/> technology. The contract code is open.</span>],
              }
            ]
            return (
              <div className="flex flex-col space-y-5">
                {info.map((item) => {
                  return (
                  <div className=" flex items-start space-x-3">
                    <div className="w-[20px] h-[20px] bg-[#3FF6A3] rounded-full" />
                    <span className="opacity-50 font-light">{item.title}</span>
                  </div>
                  )
                })}
              </div>
            );
          },
          renderImg: () => {
            return (
              <div className="w-full h-full flex items-center justify-center">
                <img className="max-h-full" src="/img/courses/lessons/1/1.png" />
              </div>
            )
          }

        },
        {
          title: 'Cryptocurrency is the money of tomorrow',
          renderContent: () => {
            const info = [
              {
                title: [<>Autonomy</>],
                content: [<>No one can "shut down" the blockchain or ban cryptocurrency.</>],
              },
              {
                title: [<>Accessibility</>],
                content: [<>To create a wallet, all you need is a device with Internet access.</>],
              },
              {
                title: [<>Anonymity</>],
                content: [<>Users can see your digital signature only. They don't know your name or location.</>],
              },
            ]
            return (
              <div className="flex flex-col space-y-5">
                {info.map((item) => {
                  return (
                  <div className="flex flex-col items-start">
                    <span className="opacity-50 font-light">{item.title}</span>
                    <span className="opacity-50 font-light">{item.content}</span>
                  </div>
                  )
                })}
              </div>
            );
          },
          renderImg: () => {
            return (
              <div className="w-full h-full flex items-center justify-center">
                <img className="max-h-full" src="/img/courses/lessons/1/2.png" />
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
      title: 'Security',
      icon: '',
      slides: [
        {
          title: '',
          renderContent: () => {
            return null;
          },
          renderImg: () => {
            return (
              <div>
                <img src="/img/1lesson/1lesson.png" />
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
    // 3 урок
    {
      title: 'Crypto wallets',
      icon: '',
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
    // 4 урок
    {
      title: 'Marketing',
      icon: '',
      slides: [
        {
          title: '',
          renderContent: () => {
            return null;
          },
          renderImg: () => {
            return (
              <div>
                <img src="/img/1lesson/1lesson.png" />
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
    // 5 урок
    {
      title: 'Tips for finding new partners',
      icon: '',
      slides: [
        {
          title: '',
          renderContent: () => {
            return null;
          },
          renderImg: () => {
            return (
              <div>
                <img src="/img/1lesson/1lesson.png" />
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





export const allCourses = [
  course1,
  course2,
  course3,
];

