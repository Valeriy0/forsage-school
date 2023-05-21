import react from "react";

export const Points = () => {

  const info = [
    {
      text: 'Anyone can start their own business with Forsage. All you need is a smartphone or a computer with Internet access.',
      icon: '/img/points/person.png',
      iconBg: '/img/points/personBg.png',
    },
    {
      text: 'Payments go directly from user to user and can be tracked on the blockchain. The platform has no access to the funds.',
      icon: '/img/points/blocks.png',
      iconBg: '/img/points/blocksBg.png',
    },
    {
      text: 'You can start with $10, and your maximum profit is not limited and depends only on your activity.',
      icon: '/img/points/grafs.png',
      iconBg: '/img/points/grafsBg.png',
    },
    {
      text: 'Decentralized marketing is powered by reliable smart contract technology. The contract code is open.',
      icon: '/img/points/calc.png',
      iconBg: '/img/points/calcBg.png',
    }
  ]

  return (
    <div className="grid grid-cols-2 gap-x-[60px] gap-y-[100px]">
      {info.map((item, itemIndex) => {
        return (
          <div className="h-[200px] w-[400px] px-[30px] relative flex flex-col items-center points-card-bg rounded-[30px]">
            <img className="z-10 mt-[-60px] h-[120px]" src={item?.icon} alt="" />
            <img className="absolute top-0 left-1/2 -translate-x-1/2" src={item?.iconBg} alt="" />
            <span className="pt-10 px-10 text-center opacity-50 text-sm">{item?.text}</span>
          </div>
        )
      })}
    </div>
  )
}