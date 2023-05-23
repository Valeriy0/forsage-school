import React from "react";

export const BuyCrypto = () => {
    return (
        <div className="mt-[200px] flex flex-col items-center space-y-20 w-full sm:space-y-10 relative">
            <span className="text-5xl text-center sm:text-4xl font-bold font-montserrat">
            How to buy cryptocurrency. <br />
            A step by step instruction
            </span>
            <div className="w-full space-y-[200px] sm:space-y-12 relative flex flex-col items-center justify-start ">
           
                <div className=" flex items-center justify-around w-full">
                    <img className="w-[400px] absolute left-0 z-[-1]" src="/img/buyCrypto/BinanceBg.png" />
                    <img className="w-[400px] sm:hidden" src="/img/buyCrypto/binance.png"/>
                    <div className="flex flex-col items-start bg-[#14191B] p-8 space-y-8 rounded-[30px] sm:items-center">
                        <span className="text-3xl sm:text-center sm:w-full font-montserrat ">Binance Exchange</span>
                        <span className="opacity-50 sm:text-center">The world's largest exchange in terms of daily trading <br className="sm:hidden"/> volume. It offers 600+ cryptocurrencies for buying, selling<br/> and trading.</span>
                        <button className="border border-1 border-[#F3BA2F] flex items-center space-x-3 rounded-[10px] py-2 px-7 ">
                            <span className="font-montserrat">
                                <a href="https://support.forsage.io/article/buycrypto/binance-exchange" target="_blank">
                                Learn more
                                </a>
                            </span>
                            <img src="/icons/arrowRight.svg"/>
                        </button>
                    </div>
                </div>
                <div className=" flex items-center  justify-around w-full relative">
                
                    <div className="flex flex-col items-start bg-[#14191B] p-8 space-y-8 rounded-[30px] sm:items-center">
                        <span className="text-3xl sm:text-center sm:w-full font-montserrat">
                            ZebPay
                            </span>
                        <span className="opacity-50 text-center">A crypto-asset exchange for residents of India, Australia <br className="sm:hidden" /> and Singapore. ZebPay offers its services on a wide range <br />  of devices, including mobile apps.</span>
                        <button className="border border-1 border-[#0173F2] flex items-center space-x-3 rounded-[10px] py-2 px-7">
                            <span className="font-montserrat">
                            <a href="https://support.forsage.io/article/buycrypto/zebpay-exchange " target="_blank">
                                Learn more
                            </a>
                                </span>
                            <img src="/icons/arrowRight.svg"/>
                        </button>
                    </div>
                    <img className="w-[400px] sm:hidden" src="/img/buyCrypto/ZebPay.png"/>
                    <img className="w-[400px] absolute right-0 z-[-1]  sm:hidden"src="/img/buyCrypto/ZebPayBg.png" />
                </div>
                <div className="flex flex-col items-center space-y-4 top-[60px] sm:px-3">
                    <span className="opacity-50 text-xl sm:text-center sm:text-lg">And that is just a part of the advantages! You can learn more about cryptocurrency in this article</span>
                    <button className="border border-white rounded-[10px] px-6 py-1.5 flex items-center justify-center space-x-3 sm:w-full sm:py-3 ">
                        <span className="font-montserrat">
                            <a href="https://support.forsage.io/article/education/whats-the-difference-between-bep-2-and-bep-20" target="_blank">
                            About
                            </a>
                            </span>
                        <img className="w-[7px]" src="/icons/arrowRIght.svg" />
                    </button>
                </div>
            </div>
            <img className="absolute w-full bottom-[-200px] z-[-20] sm:bottom-[-50px] " src="/img/ForsageSources/bg.png"/>
        </div>
    )
}