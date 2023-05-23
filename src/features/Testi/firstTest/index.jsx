import React from "react";

export const FirstTest = ({nextSlide}) => {
    const answer = [
        {
            title: 'In your phone notes'
        },
        {
            title: 'In a notepad, which you should always carry with you.'
        },
        {
            title: 'Manually written down and hidden in a safe place.'
        },
        {
            title: 'You can just take a screenshot of it on your phone.'
        },
        {
            title: 'You must memorize them and not keep them in a written form.'
        }
    ]
    
    return(
        <div className="bg-[#14191B] rounded-[20px] px-[100px] py-[50px] flex flex-col items-center justify-start min-h-[700px] h-full space-y-9 sm:px-3 w-full min-w-[800px] sm:min-w-full ">
            <div className=" flex items-center">
                <img src="/icons/greenCheckIcon.svg"/>
                <span className="text-5xl font-montserrat text-[#2AF598]">Good</span>
            </div>
            <span className="text-3xl font-montserrat font-bold sm:text-center sm:text-xl">Where can you store your <br className="hidden sm:flex" />  wallet data <br className="sm:hidden" /> (seed phrase, 12 words)?</span>
            <div className=" flex flex-col justify-start text-left space-y-7 w-full max-w-[575px]">
                {answer.map((item, itemIndex) => (
                    <div className="flex space-x-6">
                    <input type="checkbox"></input>
                    <span className="opacity-50 font-light">{item.title}</span>
                    </div>
                ))}
            </div>
            <div className="button-gradient p-[1px] flex justify-center items-center rounded-[10px] ">
                <button onClick={() => nextSlide()} className="bg-[#131314] rounded-[10px] px-8 py-2.5 flex items-center justify-center space-x-3 sm:w-full">
                    <span className="font-montserrat">Next</span>
                </button>
            </div>
        </div>
    )
}