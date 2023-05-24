import React, { useState } from "react";

export const FirstBlock = ({currentSlide,  nextSlide, prevSlide,  firstTitle, secondTitle, title, img, desc, desc2}) => {

    const [isChecked, setIsChecked] = useState(false);



    return (
        <div id={currentSlide} className="bg-[#14191B] rounded-[20px] px-[100px] py-[50px] flex items-center justify-between min-h-[700px] h-full w-full max-w-[1300px] sm:min-h-full sm:px-0 sm:flex-col sm:space-y-9 sm:min-w-full">
            <div className="space-y-[40px] flex flex-col justify-between items-start sm:items-center ">
                <span className="text-5xl font-montserrat font-bold sm:text-3xl ">{title}</span>
                <div className=" flex flex-col space-y-[35px] opacity-50 font-light sm:text-center">
                    <span>{firstTitle}</span>
                    <span>{secondTitle}</span>
                    {/* <span>A mnemonic phrase, or seed phrase, or "12 words" is <br /> generated when you create a wallet. It cannot be changed or<br />  recovered.</span>
                    <span>The seed phrase allows you to have 100% access to your <br /> wallet and assets, so it is important to keep your 12 words<br />  safe and not share them with third parties.</span> */}
                </div>
                <img className="h-[40vh] hidden sm:flex " src={img} />
                <div className=" flex flex-col space-y-3 sm:items-center">
                    <span className="text-[#FFC42D] font-bold text-2xl font-montserrat">Precautions:</span>
                    <div className="text-[#2AF598] flex flex-col space-y-2 list-disc  ">
                        <div className="flex items-center space-x-3">
                            <span className="sm:text-center">{desc}</span>
                        </div>
                    </div>
                    <span>{desc2}</span>
                </div>
                <div className=" flex space-x-7 ">
                    <div className="flex items-center space-x-4" >
                        <label className="flex items-center ">
                            <input className="real-radio" type="radio" id={`test-understand-${currentSlide}`} checked={isChecked} onChange={(e)=>{setIsChecked((prev) => !prev)}}  ></input>
                            {/* <label for={`test-understand-${currentSlide}`} className="font-light"></label> */}
                            <span className="custom-radio"></span>
                            <span className="cursor-pointer px-5 font-light" id={`test-understand-${currentSlide}`}>I understand</span>
                            
                        </label>
                        
                    </div>
                    <div className={`${!isChecked ? 'opacity-50' : 'button-gradient'}  p-[1px] flex justify-center items-center rounded-[10px] `}>
                        <button onClick={() => nextSlide()} className="bg-[#131314] rounded-[10px] px-6 py-1.5 flex items-center justify-center space-x-3 sm:w-full">
                            <span className="font-montserrat">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <img className="h-[50vh] sm:hidden " src={img} />
        </div>
    )
}