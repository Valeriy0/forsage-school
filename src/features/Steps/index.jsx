import React from "react";

export const Steps = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-11 pt-[200px] w-full">
              <img className="w-[60vh] sm:w-[30vh] absolute left-0 z-[-1]" src="/img/shadow/stepsBlueShadow.png"/>
            <span className="text-5xl font-bold sm:text-4xl sm:text-center font-montserrat">The process <br className="hidden sm:flex" /> includes 6 steps:</span>
            <img className="w-[60vh] sm:w-[30vh] absolute right-0 z-[-10] " src="/img/shadow/stepsGreenShadow.png"/>
            <div className="opacity-50 space-y-5 flex flex-col items-center justify-center w-full px-4 max-w-[380px] w-full sm:max-w-full">
                <div className="bg-[#0E0E0F] rounded-[20px] pl-9 pr-6 py-4 border border-1 border-white-100 flex flex-row  right-0 justify-between w-full mr-auto">
                    <span className="text-white-500">Account registartion</span>
                    <div className="rounded-full bg-[#4D4D4D] p-3"></div>
                </div>
                <div className="bg-[#0E0E0F] rounded-[20px] pl-6 pr-9 py-4 border border-1 border-white-100 flex flex-row  justify-between  w-full ml-auto">
                    <div className="rounded-full bg-[#4D4D4D] p-3"></div>
                    <span className="text-white-500">Personal verification</span>
                </div>
                <div className="bg-[#0E0E0F] rounded-[20px] pl-9 pr-6 py-4 border border-1 border-white-100 flex flex-row left-0 justify-between  w-full mr-auto">
                    <span className="text-white-500">Identity verification (KYC)</span>
                    <div className="rounded-full bg-[#4D4D4D] p-3"></div>
                </div>
                <div className="bg-[#0E0E0F] rounded-[20px] pl-6 pr-9 py-4 border border-1 border-white-100 flex flex-row  justify-between  w-full ml-auto">
                    <div className="rounded-full bg-[#4D4D4D] p-3"></div>
                    <span className="text-white-500">Choosing payment options</span>
                    
                </div>
                <div className="bg-[#0E0E0F] rounded-[20px] pl-9 pr-6 py-4 border border-1 border-white-100 flex flex-row left-0 justify-between  w-full mr-auto">
                    <span className="text-white-500">BNB/BUSD purchase</span>
                    <div className="rounded-full bg-[#4D4D4D] p-3"></div>
                </div>
                <div className="bg-[#0E0E0F] rounded-[20px] pl-6 pr-9 py-1 border border-1 border-white-100 flex flex-row  items-center justify-between  w-full ml-auto">
                    <div className="rounded-full bg-[#4D4D4D] p-3"></div>
                    <span className="text-white-500 text-right">BNB/BUSD withdrawal <br/> to a personal wallet</span>
                </div>
            </div>
           
        </div>
        
    )
}