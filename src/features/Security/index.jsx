import React from "react";

export const Security = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-[100px] space-y-14 sm:space-y-9 px-4">
            <div className=" flex flex-col items-center justify-center space-y-9">
                <span className="text-5xl font-bold sm:text-4xl">Security</span>
                <span className="opacity-50 text-center text-xl sm:text-base font-montserrat">Blockchain technology has the highest security level, but the human factor is still present. All <br/> transactions are anonymous and irreversible.</span>
            </div>
            <img className="w-[150vh] sm:hidden" src="/img/security/security.png"/>
            <img className="h-[30vh] hidden sm:flex" src="/img/security/securityMob.png" />
            <div className="hidden sm:flex w-full flex flex-col space-y-6">
                <div className="button-gradient p-[1px] rounded-full">
                    <button className="rounded-full py-5 w-full bg-[#0E0E0F] w-full">
                        <span className="">Seed phrase</span>
                    </button>
                </div>
                <div className="button-gradient p-[1px] rounded-full">
                    <button className="rounded-full py-5 w-full bg-[#0E0E0F] w-full">
                        <span>Private key</span>
                    </button>
                </div>
                <div className="button-gradient p-[1px] rounded-full">
                    <button className="rounded-full py-5 w-full bg-[#0E0E0F] w-full">
                        <span>Telegram bots</span>
                    </button>
                </div>
                <div className="button-gradient p-[1px] rounded-full">
                    <button className="rounded-full py-5 w-full bg-[#0E0E0F] w-full">
                        <span>Phishing web pages</span>
                    </button>
                </div>
            </div>
        </div>
    )
}