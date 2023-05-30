import react from "react";
import { Parallax } from 'react-scroll-parallax';

export const Points = () => {

  const info = [
    {
      text: 'Anyone can start their own business with Forsage. All you need is a smartphone or a computer with Internet access.',
      icon: '/img/points/person.png',
      iconBg: '/img/points/personBg.png',
    },
    {
      text: [ <span>Payments go directly from user to user <br className="sm:hidden" />and can be tracked on the blockchain. <br className="sm:hidden" />The platform has no access to the funds.</span> ],
      icon: '/img/points/blocks.png',
      iconBg: '/img/points/blocksBg.png',
    },
    {
      text: [<span>You can start with $10, and your<br className="sm:hidden" />  maximum profit is not limited and <br className="sm:hidden" /> depends only on your activity.</span>],
      icon: '/img/points/grafs.png',
      iconBg: '/img/points/grafsBg.png',
    },
    {
      text: [<span>Decentralized marketing is powered by<br className="sm:hidden" /> reliable smart contract technology. The contract code is open.</span>],
      icon: '/img/points/calc.png',
      iconBg: '/img/points/calcBg.png',
    }
  ]

  return (
    <Parallax speed={25}>
    <div className="grid grid-cols-2 px-4 sm:grid-cols-1 gap-x-[60px] gap-y-[100px]">
      
      {info.map((item, itemIndex) => {
        return (
            <div className="min-h-[200px] w-[400px] sm:w-full relative flex flex-col items-center points-card-bg rounded-[30px]">
              <img className="z-10 mt-[-60px] h-[120px]" src={item?.icon} alt="" />
              <img className="absolute top-0 left-1/2 -translate-x-1/2" src={item?.iconBg} alt="" />
              <span className="p-10 sm:px-5 text-center opacity-50 sm:text-lg font-light">{item?.text}</span>
            </div>
        )
      })}
    </div>
    </Parallax>
  )
}