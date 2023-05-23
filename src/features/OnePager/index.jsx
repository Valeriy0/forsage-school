import react from "react";

export const OnePager = () => {
  const info = [
    'If a newbie is interested in Forsage — just send them this one-pager!',
    'If someone wants to build a team and start earning — just send them this one-pager!',
    'If you are holding an offline event — just print it and give it out to the participants!',
    'If you are holding an online event — just send this one-pager to the participants!',
  ]
  return (
    <div className="flex flex-col items-center w-full w-full sm:max-w-full relative ">
      <img className="absolute top-0 z-[-1] w-full sm:top-14 " src="/img/onePager/bg.png"/>
      <div className="  flex flex-col items-center text-center space-y-10 max-w-[970px] w-full space-y-10 mb-[60px] mt-[200px] sm:mt-[120px]">
        <span className="text-5xl font-semibold font-montserrat sm:text-4xl">One-Pager</span>
        <span className="opacity-50 text-xl ">When you are just getting started with Forsage, we recommend studying a presentation where you can find all necessary information about the mechanic of platforms, levels, income, etc.</span>
      </div>
      <div className="grid grid-cols-2 gap-[30px] sm:grid-cols-1 max-w-[1170px]">
        <div className="grid grid-cols-2 gap-[30px] sm:grid-cols-1">
          {info.map((item, itemIndex) => {
            return (
              <div className="flex flex-col justify-between  onePager-card p-10 sm:space-y-5 rounded-[30px]" key={itemIndex}>
                <img className="w-10 h-10 onepager-dot-shadow rounded-full" src="/img/onePager/dot.png" alt="" />
                <span className="opacity-50">{item}</span>
              </div>
            )
          })}
        </div>
        <div className="sm:flex sm:items-center sm:justify-center">
          <img className="max-h-[550px] h-full onepager-big-shadow " src="/img/onePager/big.png" alt="" />
        </div>
      </div>
      <div className="flex space-x-9 pt-[70px] sm:hidden">
        <div className="button-gradient p-[1px] flex justify-center items-center rounded-[10px]">
          <button className="cryptoMain-card-bg rounded-[10px] px-6 py-1.5 flex items-center justify-center space-x-3 sm:w-full sm:py-3">
            <span className="font-montserrat">
              <a href="https://forsage.io/docs/forsage_one_pager_color.pdf" target="_blank">
                Download Color
              </a>
              </span>
          </button>
        </div>
        <div className="button-gradient p-[1px] flex justify-center items-center rounded-[10px]">
          <button className="cryptoMain-card-bg rounded-[10px] px-6 py-1.5 flex items-center justify-center space-x-3 sm:w-full sm:py-3">
            <span className="font-montserrat">
            <a href="https://forsage.io/docs/forsage_one_pager.pdf" target="_blank">
              Download BW
              </a>
              </span>
          </button>
        </div>
      </div>
    </div> 
  )
}