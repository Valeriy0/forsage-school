import react from "react";

export const Second = () => {

  const wrapperStyle = {
    backgroundImage: `url(/img/backgrounds/2.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="flex flex-col min-h-[800px] justify-center items-center w-full max-w-[1400px]" style={wrapperStyle}>
      <div className="flex flex-col justify-center items-center w-full max-w-[920px] font-semibold text-[32px] leading-[44.8px] text-center space-y-[150px] ">
        <span>In today's world, the network business model is the most innovative and in-demand.</span>
        <span>Forsage helps millions of people unlock their potential!</span>
        <span>Forsage is a platform for starting an online business where you can earn from inviting people.</span>
      </div>
    </div>
  )
}