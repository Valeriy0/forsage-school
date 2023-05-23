import react, { useRef, useState } from "react";
import Spline from "@splinetool/react-spline";

export const FirstWin = () => {

  const spline = useRef();
  const [isLoadingAnim, setIsLoadingAnim] = useState(true);

  let animationWrapper = {};

  function onLoad(splineApp) {
    animationWrapper = {
      width: `200%`,
      height: `200%`,
    };
    setIsLoadingAnim(false);
    spline.current = splineApp;
  }


  

  const wrapperStyle = {
    backgroundImage: `url(/img/backgrounds/1-button.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const myScene= 'https://prod.spline.design/WBWqwfLkAoaoFy7O/scene.splinecode';
  return (
    <div className="relative flex flex-col w-full max-w-[1300px] w-full sm:max-w-full">
      <div className="relative flex w-full">
        <img className="sm:hidden absolute h-[37px] left-[16px] top-[34px]" src="/img/logo.png" alt="" />
        <img className="hidden sm:flex absolute h-[37px] left-[16px] top-[34px]" src="/img/logo-mobile.png" alt="" />
        <span className="absolute left-[5%] top-1/2 sm:top-[40%] -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:w-[100%] sm:text-center sm:text-4xl text-5xl font-montserrat font-bold"> Start a business <br/> with<span className="text-gradient"> Forsage</span> </span>
        <button style={wrapperStyle} className="absolute bottom-[-7.5%] left-[11.75%] h-[23.5%] w-[12.75%] sm:bottom-[-12%] sm:left-1/2 sm:-translate-x-1/2 sm:h-[42%] sm:w-[49%] rounded-full"> 
          <span className="text-xl font-semibold text-textWhite"> Start </span>
        </button>    
        <img className="sm:hidden" src="/img/backgrounds/1.png" alt="" />
        <img className="hidden sm:flex" src="/img/backgrounds/1-mobile.png" alt="" />
        <div className={`absolute sm:hidden right-0 top-1/2 -translate-y-1/2 z-10 ${!isLoadingAnim && '!w-[60%] !h-[120%]'} `}>
          <Spline
            scene={myScene}
            onLoad={onLoad}
          />
        </div>
      </div>
      <div className={`hidden relative sm:block sm:pt-20 z-10 ${!isLoadingAnim && '!w-full !h-[450px]'} `}>
        <img className="z-[-10] absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-80" src="/img/firstWin/mobileBlur.png" alt="" />
          <Spline
            scene={myScene}
            onLoad={onLoad}
          />
        </div>
    </div>
  )
}