import react from "react";

export const Second = () => {

  const wrapperStyle = {
    backgroundImage: `url(/img/backgrounds/2.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="flex flex-col min-h-[800px] sm:min-h-[450px] justify-center items-center w-full max-w-[1400px] sm:max-w-[full]" style={wrapperStyle}>
      <div className="flex flex-col justify-center items-center w-full max-w-[920px] sm:max-w-full font-semibold text-3xl sm:text-2xl text-center space-y-[150px] sm:space-y-[80px]">
        <span>In today's world, the <span className="text-gradient">network business</span> model is the most innovative and in-demand.</span>
        <span><span className="text-gradient">Forsage helps</span>  millions of people unlock their potential!</span>
        <span>Forsage is a platform <span className="text-gradient">for starting an online business </span>where you can earn from inviting people.</span>
      </div>
    </div>
  )
}