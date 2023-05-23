import React from "react";

export const SecondTest = ({}) => {
    
    const secondAnswer = [
        {
            title: [
                <span>
                  When it is impossible to perform a transfer to a third party,<br /> you should give them access so that they can perform the<br />  operation themselves.
                </span>
            ],
        },
        {
            title: [
                <span>
                  When the Forsage administrators require access to <br /> perform a transaction for rewards.
                </span>
            ],
        },
        {
            title: [
                <span>
                 There is no such situation. Data for accessing the wallet is <br/> stored only with you.
                </span>
            ],
        },
        {
            title: [
                <span>
                  In an emergency situation, for example, to help in an<br/> accident
                </span>
            ],
        },
    ]
    return(       
        <div className="bg-[#14191B] rounded-[20px] px-[100px] py-[50px] flex flex-col items-center justify-start min-h-[700px] h-full space-y-9 h-full space-y-9 sm:px-3  w-full min-w-[800px] sm:min-w-full    ">
            <div className=" flex items-center">
                <img src="/icons/greenCheckIcon.svg"/>
                <span className="text-5xl font-montserrat text-[#2AF598]">Good</span>
            </div>
            <span className="text-3xl font-montserrat font-bold sm:text-center sm:text-xl">In what situation can you share data <br className="sm:hidden"/> to access your wallet?</span>
            <div className=" flex flex-col justify-start text-left space-y-7 w-full max-w-[575px]">
                {secondAnswer.map((item, itemIndex) => (
                    <div className="flex space-x-6">
                    <input type="checkbox"></input>
                    <span className="opacity-50 font-light">{item.title}</span>
                    </div>
                ))}
            </div>
            <div className="button-gradient  p-[1px] flex justify-center items-center rounded-[10px] ">
                <button  className="bg-[#131314] rounded-[10px] px-8 py-2.5 flex items-center justify-center space-x-3 sm:w-full">
                    <span className="font-montserrat">Done</span>
                </button>
            </div>
        </div> 
    )
}