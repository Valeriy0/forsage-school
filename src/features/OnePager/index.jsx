import react from "react";

export const OnePager = () => {
  const info = [
    'If a newbie is interested in Forsage — just send them this one-pager!',
    'If someone wants to build a team and start earning — just send them this one-pager!',
    'If you are holding an offline event — just print it and give it out to the participants!',
    'If you are holding an online event — just send this one-pager to the participants!',
  ]
  return (
    <div className="flex flex-col items-center max-w-[1170px] w-full sm:max-w-full">
      <div className="flex flex-col items-center text-center space-y-10 max-w-[970px] w-full space-y-10 mb-[60px]">
        <span className="text-3xl font-semibold">One-Pager</span>
        <span className="opacity-50 ">When you are just getting started with Forsage, we recommend studying a presentation where you can find all necessary information about the mechanic of platforms, levels, income, etc.</span>
      </div>
      <div className="grid grid-cols-2 gap-[30px] sm:grid-cols-1">
        <div className="grid grid-cols-2 gap-[30px] sm:grid-cols-1">
          {info.map((item, itemIndex) => {
            return (
              <div className="flex flex-col justify-between rounded-[30px] onePager-card p-10 sm:space-y-5" key={itemIndex}>
                <img className="w-10 h-10 onepager-dot-shadow rounded-full" src="/img/onePager/dot.png" alt="" />
                <span className="opacity-50">{item}</span>
              </div>
            )
          })}
        </div>
        <div className="">
          <img className="max-h-[550px] h-full onepager-big-shadow" src="/img/onePager/big.png" alt="" />
        </div>
      </div>
      <div className="flex space-x-9 pt-[70px] sm:hidden">
        <button className="border border-white rounded-[10px] px-6 py-1.5 flex items-center justify-center space-x-3 sm:w-full sm:py-3">
          <span className="">Download Color</span>
        </button>
        <button className="border border-white rounded-[10px] px-6 py-1.5 flex items-center justify-center space-x-3 sm:w-full sm:py-3">
          <span>Download BW</span>
        </button>
      </div>
    </div> 
  )
}