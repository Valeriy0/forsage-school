import React from "react";

export const Good = () => {
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
        <>
        <div className="bg-[#14191B] rounded-[20px] px-[100px] py-[50px] flex flex-col items-center justify-start min-h-[700px] h-full space-y-9 ">
            <div className=" flex items-center">
                <img src="/icons/greenCheckIcon.svg"/>
                <span className="text-5xl font-montserrat text-[#2AF598]">Good</span>
            </div>
            <span className="text-3xl font-montserrat font-bold">Where can you store your wallet data <br /> (seed phrase, 12 words)?</span>
            <div className=" flex flex-col justify-start text-left space-y-7 w-full max-w-[575px]">
                {answer.map((item, itemIndex) => (
                    <div className="flex space-x-6">
                    <input type="checkbox"></input>
                    <span className="opacity-50 font-light">{item.title}</span>
                    </div>
                ))}
            </div>
            <button className="border border-1 rounded-[10px] px-8 py-2.5 flex items-center justify-center space-x-3 sm:w-full">
                <span className="font-montserrat">Next</span>
            </button>
        </div>



        <div className="bg-[#14191B] rounded-[20px] px-[100px] py-[50px] flex flex-col items-center justify-start min-h-[700px] h-full space-y-9 ">
            <div className=" flex items-center">
                <img src="/icons/greenCheckIcon.svg"/>
                <span className="text-5xl font-montserrat text-[#2AF598]">Good</span>
            </div>
            <span className="text-3xl font-montserrat font-bold">In what situation can you share data <br/> to access your wallet?</span>
            <div className=" flex flex-col justify-start text-left space-y-7 w-full max-w-[575px]">
                {secondAnswer.map((item, itemIndex) => (
                    <div className="flex space-x-6">
                    <input type="checkbox"></input>
                    <span className="opacity-50 font-light">{item.title}</span>
                    </div>
                ))}
            </div>
            <button className="border border-1 rounded-[10px] px-8 py-2.5 flex items-center justify-center space-x-3 sm:w-full">
                <span className="font-montserrat">Done</span>
            </button>
        </div>
        </>
    )
}