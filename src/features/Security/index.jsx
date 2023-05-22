import React from "react";

export const Security = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-[150px] space-y-14 sm:space-y-9">
            <div className=" flex flex-col items-center justify-center space-y-9">
                <span className="text-5xl font-bold sm:text-4xl">Security</span>
                <span className="opacity-50 text-center text-xl sm:text-base">Blockchain technology has the highest security level, but the human factor is still present. All <br/> transactions are anonymous and irreversible.</span>
            </div>
            <img className="w-[150vh] sm:hidden" src="/img/security/security.png"/>
            <img className="h-[30vh] hidden sm:flex" src="/img/security/securityMob.png" />
            <div className="hidden sm:flex w-full flex flex-col space-y-6">
                <button className="rounded-full py-5 w-full border w-full">
                    <span className="">Seed phrase</span>
                </button>
                <button className="rounded-full py-5 w-full border w-full">
                    <span>Private key</span>
                </button>
                <button className="rounded-full py-5 w-full border w-full">
                    <span>Telegram bots</span>
                </button>
                <button className="rounded-full py-5 w-full border w-full">
                    <span>Phishing web pages</span>
                </button>
            </div>
        </div>
    )
}