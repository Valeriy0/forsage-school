import React, { useState } from "react";

export const SecondTest = ({}) => {
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const answers = [
        {
            title: [
                <span>
                  When it is impossible to perform a transfer to a third party,<br /> you should give them access so that they can perform the<br />  operation themselves.
                </span>
            ],
            isTrue: false,
        },
        {
            title: [
                <span>
                  When the Forsage administrators require access to <br /> perform a transaction for rewards.
                </span>
            ],
            isTrue: false,
        },
        {
            title: [
                <span>
                 There is no such situation. Data for accessing the wallet is <br/> stored only with you.
                </span>
            ],
            isTrue: true,
        },
        {
            title: [
                <span>
                  In an emergency situation, for example, to help in an<br/> accident
                </span>
            ],
            isTrue: false,
        },
    ]
    return(       
        <div className="bg-[#14191B] rounded-[20px] px-[100px] py-[50px] flex flex-col items-center justify-start min-h-[700px] h-full space-y-9 h-full space-y-9 sm:px-3  w-full min-w-[900px] sm:min-w-full    ">
            <div className=" flex items-center">
                <img src="/icons/greenCheckIcon.svg"/>
                <span className="text-5xl font-montserrat text-[#2AF598]">Good</span>
            </div>
            <span className="text-3xl font-montserrat font-bold sm:text-center sm:text-xl">In what situation can you share data <br className="sm:hidden"/> to access your wallet?</span>
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
            <div className="button-gradient  p-[1px] flex justify-center items-center rounded-[10px] ">
                <button className="button-gradient rounded-[10px] px-6 py-1.5 flex items-center justify-center space-x-3 sm:w-full">
                    <span className="font-montserrat">
                        Done
                    </span>    
                </button>
            </div>
        </div> 
    )
}