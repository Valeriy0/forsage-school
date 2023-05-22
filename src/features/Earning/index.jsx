import react from "react";

export const Earning = () => {

  return (
        <div className="flex flex-col items-center space-y-14 pt-[50px] w-full">
            <span className="text-4xl font-medium ">Let's recap</span>
            <div className=" flex items-start justify-between w-full ">
                <img className=" w-[55vh] left-0" src="/img/earning/gamepad.png" />
                <div className="bg-[#14191B] rounded-[30px] border border-1 py-11 px-[50px] flex flex-col items-center space-y-7 mt-[50px]">
                    <span className="text-2xl font-bold">How do you earn at FORSAGE?</span>
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
                <img className="w-[55vh] right-0" src="/img/earning/secondPic.png" />
            </div>
        </div>
  )
}