import react from "react";

export const CryptoMain = () => {

  const wrapperStyle = {
    backgroundImage: `url(/img/cryptoMain/bg.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const info = [
    {
      title: 'Autonomy',
      desc: 'No one can "shut down" the blockchain or ban cryptocurrency.',
    },
    {
      title: 'Accessibility',
      desc: 'To create a wallet, all you need is a device with Internet access.',
    },
    {
      title: 'Anonymity',
      desc: `Users can see your digital signature only. They don't know your name or location.`,
    },
  ]

  return (
    <div className="flex flex-col w-full items-center justify-center px-4" style={wrapperStyle}>
      <div className="flex justify-center items-center w-full max-w-[1021px] sm:max-w-full sm:flex-col space-x-[181px] sm:space-x-0 sm:space-y-[60px] h-[586px] sm:h-auto sm:pb-[60px]">
        <img className="w-[240px] sm:h-[150px] sm:w-[150px]" src="/img/cryptoMain/logo.png" alt="" />
        <span className="text-6xl sm:text-4xl sm:text-center sm:font-semibold text-gradient font-montserrat">Cryptocurrency <br/> is the money of <br/> tomorrow</span>
      </div>
      <div className="flex space-x-[30px] max-w-[1170px] sm:flex-col sm:space-x-0 sm:space-y-[30px] sm:max-w-full">
        {info.map((item, itemIndex) => {
          return (
            <div className="flex flex-col items-center flex-1 space-y-10 sm:space-y-[30px]">
              <span className="text-6xl font-semibold text-gradient font-montserrat">0{itemIndex+1}</span>
              <div className="cryptoMain-gradient rounded-[30px] p-[1px]">
                <div className="sm:w-full h-full flex flex-col items-center text-center p-10 sm:px-5 cryptoMain-card-bg rounded-[30px] space-y-5" key={itemIndex}>
                  <span className="text-2xl font-montserrat">{item?.title}</span>
                  <span className="text-sm opacity-50">{item?.desc}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex flex-col mt-[100px] sm:mt-[50px] items-center space-y-5">
        <span className="opacity-50 text-xl text-center sm:text-sm">And that is just a part of the advantages! You can <br className="hidden sm:flex" /> learn more about cryptocurrency in this article</span>
        <div className="button-gradient p-[1px] flex justify-center items-center rounded-[10px]">
          <button className="cryptoMain-card-bg rounded-[10px] px-6 py-1.5 flex items-center justify-center space-x-3 sm:w-full">
              <span className="font-montserrat">
              <a href="https://support.forsage.io/article/education/crypto" target="_blank">
                About
                </a>
                </span>
              <img className="w-[7px]" src="/icons/arrowRightIcon.svg" />
          </button>
        </div>
      </div>
    </div>
  )
}