import React from "react";

export const SeedPhrase = ({firstTitle, secondTitle, title, img, desc, desc2}) => {
    const phrase = [
        {
            title: {desc},
        },
        // {
        //     title: "Don't take pictures or screenshots of your seed phrase."
        // },
        // {
        //     title: "Don't type your 12 words on third-party websites or apps."
        // },
        // {
        //     title: "Keep your phrase on paper in the safest place possible."
        // }
        
    ]

    return (
        <div className="bg-[#14191B] rounded-[20px] px-[100px] py-[50px] flex items-center justify-between min-h-[700px] h-full">
            <div className="space-y-[40px] flex flex-col justify-between items-start ">
                <span className="text-5xl font-montserrat font-bold">{title}</span>
                <div className=" flex flex-col space-y-[35px] opacity-50 font-light">
                    <span>{firstTitle}</span>
                    <span>{secondTitle}</span>
                    {/* <span>A mnemonic phrase, or seed phrase, or "12 words" is <br /> generated when you create a wallet. It cannot be changed or<br />  recovered.</span>
                    <span>The seed phrase allows you to have 100% access to your <br /> wallet and assets, so it is important to keep your 12 words<br />  safe and not share them with third parties.</span> */}
                </div>
                <div className=" flex flex-col space-y-3">
                    <span className="text-[#FFC42D] font-bold text-2xl font-montserrat">Precautions:</span>
                    <div className="text-[#2AF598] flex flex-col space-y-2 list-disc  ">
                     {phrase.map((item, itemIndex) => (
                        <div className="flex items-center space-x-3">
                            {/* <div className="bg-[#2AF598] rounded-full h-[10px] w-[10px]"></div> */}
                            <span>{desc}</span>
                        </div>
                        ))}
                    </div>
                    <span>{desc2}</span>
                </div>
                <div className=" flex space-x-7 ">
                    <div className=" flex items-center space-x-4">
                        <input type="checkbox"></input>
                        <span className="font-light">I understand</span>
                    </div>
                    <button className="border border-1  rounded-[10px] px-6 py-1.5 flex items-center justify-center space-x-3 sm:w-full">
                        <span className="font-montserrat">Next</span>
                    </button>
                </div>
            </div>
            <img className="h-[50vh]" src={img} />
        </div>
    )
}