import React from "react";
import { LottieXQoreMarketingLegend } from '@/helpers/animation/xQore';
import Lottie from 'react-lottie';

export const Marketing = () => {
    return (
        <div className="flex justify-center max-w-[1170px] w-full px-4 sm:flex-col ">
            <div className="space-y-8 flex flex-col items-start sm:text-center">
                <span className="text-5xl sm:w-full font-montserrat">Marketing</span>
                <span className="w-[360px] sm:w-full opacity-50">
                FORSAGE Marketing is a matrix system based on decentralized smart contracts technology. Profits come from inviting new partners to your team, who, once registered, stay with you forever, as it is recorded in the blockchain.
                Income is distributed automatically and instantly to participants' personal wallets.
                Your maximum income depends only on your activity.
                </span>
                <div className="button-gradient p-[1px] flex justify-center items-center rounded-[10px] sm:w-full">
                    <button className="cryptoMain-card-bg rounded-[10px] px-6 py-1.5 flex items-center justify-center space-x-3 sm:w-full sm:py-3">
                        <span className="font-montserrat">See more</span>
                        <img className="w-[7px]" src="/icons/arrowRightIcon.svg" />
                    </button>
                </div>
            </div>
            <div className="flex justify-center sm:mt-[50px] sm:w-full">
                <div className="relative w-[80%] sm:w-full z-[10]">
                    <img className="z-[-10] w-[100%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="/img/shadow/traidingSahdow.png"/>
                    <img className="max-w-[80vw] w-full sm:max-w-full" src="/img/marketing/Marketing.png" />
                    <div className="absolute z-10 top-[5%] left-[15%] w-[70%]">
                        <Lottie
                            options={{
                            loop: true,
                            autoplay: true,
                            animationData: LottieXQoreMarketingLegend,
                            rendererSettings: {
                                progressiveLoad: true,
                            },
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}