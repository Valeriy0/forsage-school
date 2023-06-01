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
        },
        {
          question: '123412 ?',
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
          title: 'Security',
          renderContent: () => {
            const info = [
              'Seed phrase', 
              'Private key',
              'Telegram bots',
              'Phishing web pages',
            ]
            return (
              <div className="flex flex-col space-y-5">
                <span className="opacity-50">
                  Blockchain technology has the highest security level, but the human factor is still present. All transactions are anonymous and irreversible.
                </span>
                {info.map((item) => {
                  return (
                  <div className=" flex justify-start items-start space-x-3">
                    <div className="mt-[4px] w-[20px] h-[20px] bg-[#3FF6A3] rounded-full" />
                    <span className="text-lg font-bold">{item}</span>
                  </div>
                  )
                })}
              </div>
            );
          },
          renderImg: () => {
            return (
              <div className="w-full h-full flex items-center justify-center">
                <img className="max-h-[60%]" src="/img/courses/lessons/2/1.png" />
              </div>
            )
          }

        },
        {
          title: 'Seed phrase',
          renderContent: () => {
            const info = [
              `Don't share your 12 words with anyone.`, 
              `Don't take pictures or screenshots of your seed phrase.`,
              `Don't type your 12 words on third-party websites or apps.`,
              'Keep your phrase on paper in the safest place possible.',
            ]
            return (
              <div className="flex flex-col space-y-10">
                <div className="opacity-50 flex flex-col space-y-10">
                  <span>
                    A mnemonic phrase, or seed phrase, or "12 words" is generated when you create a wallet. It cannot be changed or recovered.
                  </span>
                  <span>
                    The seed phrase allows you to have 100% access to your wallet and assets, so it is important to keep your 12 words safe and not share them with third parties.
                  </span>
                </div>

                <div className="flex flex-col space-y-5">
                  <span className="text-xl text-[#FFC42D] text-xl font-semibold">
                    Precautions:
                  </span>
                  <div className="flex flex-col space-y-1.5">
                    {info.map((item) => {
                      return (
                      <div className="flex justify-start items-center space-x-5">
                        <div className="w-2.5 h-2.5 bg-[#3FF6A3] rounded-full" />
                        <span className="text-[#3FF6A3]">{item}</span>
                      </div>
                      )
                    })}
                  </div>

                </div>
               
                
              </div>
            );
          },
          renderImg: () => {
            return (
              <div className="w-full h-full flex items-center justify-center">
                <img className="max-h-[60%]" src="/img/courses/lessons/2/2.png" />
              </div>
            )
          }

        },
        {
          title: 'Private Key',
          renderContent: () => {
            return (
              <div className="flex flex-col space-y-10">
                <div className="opacity-50 flex flex-col space-y-10">
                  <span>
                    A private key is a combination of letters and numbers that allows you to manage your wallet and assets. Only the owner of the address can know the private key, and it cannot be changed or disabled.
                  </span>
                  <span>
                    A private key provides access to only one specific cryptocurrency address, while a seed phrase gives you full control over all cryptocurrency addresses that have been generated in the wallet.
                  </span>
                </div>

                <div className="flex flex-col space-y-5">
                  <span className="text-xl text-[#FFC42D] text-xl font-semibold">
                    Precautions:
                  </span>
                  <span className="text-[#3FF6A3]">
                    Do not copy or request your private key from the blockchain without need. It is strictly forbidden to transfer, paste or share your private key!
                  </span>
                </div>
              </div>
            );
          },
          renderImg: () => {
            return (
              <div className="w-full h-full flex items-center justify-center">
                <img className="max-h-[60%]" src="/img/courses/lessons/2/3.png" />
              </div>
            )
          }
        },
        {
          title: 'Phishing Web Pages',
          renderContent: () => {
            return (
              <div className="flex flex-col space-y-10">
                <div className="opacity-50 flex flex-col space-y-10">
                  <span>
                    More and more phishing websites (clones of the original ones) are appearing online. These websites can be used 
                    by fraudsters to gain access to your data and finances.
                  </span>
                </div>

                <div className="flex flex-col space-y-5">
                  <span className="text-xl text-[#FFC42D] text-xl font-semibold">
                    Precautions:
                  </span>
                  <span className="text-[#3FF6A3]">
                    Always make sure the domain name is spelled correctly, since sometimes it is replaced by a similar one. Check for SSL-certificate (the lock icon near the input line). Don't click 
                    the links from strangers.
                  </span>
                  <span className="text-white">
                    The official Forsage website is <a className="text-[#3FF6A3]" href="https://forsage.io/">forsage.io</a> 
                  </span>
                </div>
              </div>
            );
          },
          renderImg: () => {
            return (
              <div className="w-full h-full flex items-center justify-center">
                <img className="max-h-[60%]" src="/img/courses/lessons/2/4.png" />
              </div>
            )
          }
        },
        {
          title: 'Telegram bots',
          renderContent: () => {
            return (
              <div className="flex flex-col space-y-10">
                <div className="opacity-50 flex flex-col space-y-10">
                  <span>
                    A popular type of scam emerging in Telegram is fake bots using well-known platform and project names. Please note: Forsage has no Telegram bots with passive income.
                  </span>
                </div>

                <div className="flex flex-col space-y-5">
                  <span className="text-xl text-[#FFC42D] text-xl font-semibold">
                    Precautions:
                  </span>
                  <span className="text-[#3FF6A3]">
                    Use only the Telegram bots referenced on the official resources of the platforms.
                  </span>
                </div>
              </div>
            );
          },
          renderImg: () => {
            return (
              <div className="w-full h-full flex items-center justify-center">
                <img className="max-h-[60%]" src="/img/courses/lessons/2/5.png" />
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
          title: 'Installing a wallet on your smartphone or computer',
          renderContent: () => {
            return (
              <div className="flex flex-col space-y-10">
                <div className="opacity-50 flex flex-col space-y-10">
                  <span>
                    To sign up with Forsage, you need a wallet. An app gives you access to registration and personal dashboard, as well as to the crypto that you earn.
                  </span>
                </div>

              </div>
            );
          },
          renderImg: () => {
            return (
              <div className="w-full h-full flex items-center justify-center">
                <img className="max-h-[60%]" src="/img/courses/lessons/2/5.png" />
              </div>
            )
          }
        },
        {
          title: 'How to buy cryptocurrency. A step-by-step instruction',
          renderContent: () => {
            return (
              <div className="flex flex-col space-y-10">
                <div className=" flex flex-col space-y-[30px]">
                  <span>Binance Exchange</span>
                  <span className="opacity-50">
                    The world's largest exchange in terms of daily trading volume. It offers 600+ cryptocurrencies for buying, selling and trading.
                  </span>
                </div>

              </div>
            );
          },
          renderImg: () => {
            return (
              <div className="w-full h-full flex items-center justify-center">
                <img className="max-h-[60%]" src="/img/courses/lessons/2/5.png" />
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

