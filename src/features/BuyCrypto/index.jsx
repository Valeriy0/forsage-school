import React from "react";

export const BuyCrypto = () => {
    return (
        <div className="mt-[200px] flex flex-col items-center space-y-20 w-full">
            <span className="text-5xl text-center">
            How to buy cryptocurrency. <br />
            A step by step instruction
            </span>
            <div className="w-full space-y-[200px]">
                <div className=" flex items-center  justify-around w-full">
                    <img className="w-[400px] absolute left-0 z-[-1]" src="/img/buyCrypto/BinanceBg.png" />
                    <img className="w-[400px]" src="/img/buyCrypto/binance.png"/>
                    <div className="flex flex-col items-start bg-[#14191B] p-8 space-y-8 rounded-[30px]">
                        <span className="text-3xl">Binance Exchange</span>
                        <span className="opacity-50">The world's largest exchange in terms of daily trading <br/> volume. It offers 600+ cryptocurrencies for buying, selling<br/> and trading.</span>
                        <button className="border border-1 border-[#F3BA2F] flex items-center space-x-3 rounded-[10px] py-2 px-7">
                            <span>Learn more</span>
                            <img src="/icons/arrowRight.svg"/>
                        </button>
                    </div>
                </div>
                <div className=" flex items-center  justify-around w-full">
                    <div className="flex flex-col items-start bg-[#14191B] p-8 space-y-8 rounded-[30px]">
                        <span className="text-3xl">ZebPay</span>
                        <span className="opacity-50">A crypto-asset exchange for residents of India, Australia <br /> and Singapore. ZebPay offers its services on a wide range <br />  of devices, including mobile apps.</span>
                        <button className="border border-1 border-[#0173F2] flex items-center space-x-3 rounded-[10px] py-2 px-7">
                            <span>Learn more</span>
                            <img src="/icons/arrowRight.svg"/>
                        </button>
                    </div>
                    <img className="w-[400px]" src="/img/buyCrypto/ZebPay.png"/>
                    <img className="w-[400px] absolute right-0 z-[-1]"src="/img/buyCrypto/ZebPayBg.png" />
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <span className="opacity-50 text-xl">And that is just a part of the advantages! You can learn more about cryptocurrency in this article</span>
                    <button className="border border-white rounded-[10px] px-6 py-1.5 flex items-center justify-center space-x-3">
                        <span>About</span>
                        <img className="w-[7px]" src="/icons/arrowRIght.svg" />
                    </button>
                </div>
            </div>
        </div>
    )
}