import react from "react";

export const Earning = () => {

  return (
        <div className="flex flex-col items-center space-y-14 pt-[50px] w-full sm:space-y-0 sm:w-full">
            <div className="flex justify-center sm:w-full ">
                <img className="absolute h-[23vh]  left-0 hidden sm:flex" src="/img/earning/gamepadMob.png" />
                <span className="text-4xl font-medium sm:text-3xl sm:mt-[30px] sm:font-bold font-montserrat">Let's recap</span>
                <img className=" absolute h-[18vh]  right-0 hidden sm:flex " src="/img/earning/secondPicMob.png" />
            </div>
            <div className=" flex items-start justify-between w-full sm:w-full ">
                <img className=" w-[55vh] left-0 sm:hidden" src="/img/earning/gamepad.png" />
                <div className=" flex flex-col relative items-center sm:w-full">
                    <div className="button-gradient p-[1px] flex justify-center items-center mt-[50px] relative sm:top-[50px] rounded-[30px]">           
                        <div className="bg-[#14191B] rounded-[30px] py-11 px-[50px] flex flex-col items-center space-y-7  sm:px-5 sm:py-5 sm:w-full">
                            
                            <div className="w-[100px] h-[100px] rounded-full absolute top-[-65px] button-gradient p-[1px] flex justify-center items-center">
                                <div className="w-full h-full bg-[#14191B] rounded-full"></div>
                            </div>

                            <span className="text-2xl font-bold text-center font-montserrat ">How do you earn at FORSAGE?</span>
                            <div className="flex flex-col items-start space-y-4 opacity-50">
                                <div className="flex items-center justify-center space-x-5">
                                    <div className="rounded-full border border-1 border-white p-2 "></div>
                                    <span>Activate levels in programs and wait for passive income.</span>
                                </div>
                                <div className="flex items-center justify-center space-x-5">
                                    <div className="rounded-full border border-1 border-white p-2 "></div>
                                    <span>Invite partners to your team and activate levels and <br/> programs together.</span>
                                </div>
                                <div className="flex items-center justify-center space-x-5">
                                    <div className="rounded-full border border-1 border-white p-2 "></div>
                                    <span>Wait for income from your upline partner.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 h-[200px] w-full max-w-[500px] button-gradient p-[1px] flex justify-center items-center absolute top-[180px] sm:top-[10/12] z-[-10] rounded-[30px]"> 
                        <div className="w-full h-full rounded-[30px]  px-20 bg-[#14191B]"></div>
                    </div>
                    <div className="opacity-20 h-[200px] w-full max-w-[450px] button-gradient p-[1px] flex justify-center items-center absolute top-[200px] sm:top-[10/12] z-[-15] rounded-[30px]"> 
                        <div className="w-full h-full rounded-[30px]  px-20 bg-[#14191B]"></div>
                    </div>
                </div>
                <img className="w-[55vh] right-0 sm:hidden" src="/img/earning/secondPic.png" />
            </div>
        </div>
  )
}