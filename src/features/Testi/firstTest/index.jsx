import React, { useState } from "react";

export const FirstTest = ({nextSlide}) => {
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const answers = [
        {
            title: 'In your phone notes',
            isTrue: false,
        },
        {
            title: 'In a notepad, which you should always carry with you.',
            isTrue: false,
        },
        {
            title: 'Manually written down and hidden in a safe place.',
            isTrue: false,
        },
        {
            title: 'You can just take a screenshot of it on your phone.',
            isTrue: false,
        },
        {
            title: 'You must memorize them and not keep them in a written form.',
            isTrue: true,
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
            {answers.map((item, itemIndex) => {
                const isTrue = answers[itemIndex]?.isTrue;
                const isChecked = itemIndex === currentAnswer || answers[itemIndex]?.isTrue && currentAnswer !== null;
                                   
                return (
                    <div onClick={() => setCurrentAnswer(itemIndex)} className={`flex items-center justify-start space-x-5 ${isChecked ? isTrue ? 'test-gradient-suc' : 'test-gradient-err' : 'opacity-50'}`}>
                        <input checked={isChecked} type="radio" id={`input-securityTest-${itemIndex}`} className="rounded-full border border-1 border-white p-2" />
                        <label for={`input-securityTest-${itemIndex}`}>{item?.title}</label>
                    </div>
                    )
                })}
            </div>
            <div className="button-gradient p-[1px] flex justify-center items-center rounded-[10px] ">
                <button onClick={() => nextSlide()} className="bg-[#131314] rounded-[10px] px-8 py-2.5 flex items-center justify-center space-x-3 sm:w-full">
                    <span className="font-montserrat">Next</span>
                </button>
            </div>
        </div>
    )
}