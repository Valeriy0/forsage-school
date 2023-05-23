import react from "react";

export const RefferalLinks = () => {
  const info = [
    {
      text: 'Your link is on the dashboard, in the upper right corner. You can share the link by copying it.',
      icon: '/img/refferalLinks/1.png',
    },
    {
      text: `Once new partners are registered, the team's performance data is uploaded to your dashboard.`,
      icon: '/img/refferalLinks/2.png',
    },
    {
      text: 'A referral link allows you to join forces with your team members to increase profits and distribute them evenly among the partners.',
      icon: '/img/refferalLinks/3.png',
    },
  ]
  return (
    <div className="max-w-[1170px] w-full flex flex-col items-center px-4 sm:max-w-full sm:w-full ">
      <div className="flex flex-col max-w-[800px] w-full items-center text-center space-y-10 mb-12">
        <span className="font-semibold text-5xl font-montserrat">Referral link and its potential</span>
        <span className="opacity-50">Your profit in Forsage depends on your partners. When you register, a personal referral link is created for you. Once someone clicks on it, they automatically become your partner.</span>
      </div>
      <div className="flex justify-between w-full space-x-[30px] sm:flex-col sm:space-x-0 sm:text-center sm:items-center ">
        {info?.map((item, itemIndex) => {
          return (
            <div className="overflow-hidden rounded-[30px] w-[370px] sm:w-full h-[470px] relative p-10 flex flex-col " key={itemIndex}>
              <span>{item?.text}</span> 
              <img className="absolute bottom-0 right-0 sm:w-full" src={item?.icon} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  )
}