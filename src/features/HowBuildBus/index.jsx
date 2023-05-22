import react from "react";

export const HowBuildBus = () => {
  const info = [
    {
      icon: '/img/howBuildBus/icons/1.png',
      styleWrap: 'howBuildBus-card-1',
      text: 'Acquire and develop business skills',
    },
    {
      icon: '/img/howBuildBus/icons/2.png',
      styleWrap: 'howBuildBus-card-2',
      text: 'Invite new people to your team',
    },
    {
      icon: '/img/howBuildBus/icons/3.png',
      styleWrap: 'howBuildBus-card-3',
      text: 'Train your partners to invite new people',
    },
  ]
  return (
    <div className="relative flex flex-col max-w-[1170px] w-full space-y-[100px]">
      <img className="absolute top-0 right-0 max-w-[45%] w-full sm:hidden" src="/img/howBuildBus/circle.png" alt="" />
      <div className="flex flex-col space-y-10 max-w-[600px] sm:text-center">
        <span className="text-4xl font-semibold">How to build a business with Forsage?</span>
        <div className="flex flex-col space-y-5 opacity-50">
          <span>Do these 3 steps regularly for success, and train your partners to do the same.</span>
          <span>Forsage School courses, Forsage support, and your Leader will help you with each of these steps!</span>
        </div>
      </div>
      <div className="flex w-full justify-between sm:flex-col sm:w-full sm:space-y-7">
        {info.map((item, itemIndex) => {
          return (
            <div className={`overflow-hidden max-w-[280px] h-[330px] w-full flex flex-col ${item?.styleWrap} rounded-[30px] sm:w-full sm:max-w-full sm: h-full`} key={itemIndex}>
              <img className="-mt-5" src={item?.icon} alt="" />
              <span className="-mt-10 text-xl px-10 pb-[60px] text-center sm:px-18">{item?.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}