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
    <div className="flex flex-col w-full items-center justify-center" style={wrapperStyle}>
      <div className="flex justify-center items-center w-full max-w-[1021px] space-x-[181px] h-[586px]">
        <img className="w-[240px]" src="/img/cryptoMain/logo.png" alt="" />
        <span className="text-6xl">Cryptocurrency <br/> is the money of <br/> tomorrow</span>
      </div>
      <div className="flex space-x-[30px] max-w-[1170px]">
        {info.map((item, itemIndex) => {
          return (
            <div className="flex flex-col items-center flex-1 space-y-10">
              <span className="text-3xl">0{itemIndex+1}</span>
              <div className="h-full flex flex-col items-center text-center p-10 cryptoMain-card-bg rounded-[30px] space-y-10" key={itemIndex}>
                <span className="text-xl">{item?.title}</span>
                <span className="text-sm opacity-50">{item?.desc}</span>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex flex-col">
        <span>And that is just a part of the advantages! You can learn more about cryptocurrency in this article</span>
        <button></button>
      </div>
    </div>
  )
}