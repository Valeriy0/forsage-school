import React from "react";

export const Security = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-[150px] space-y-14">
            <div className=" flex flex-col items-center justify-center space-y-9">
                <span className="text-5xl font-bold">Security</span>
                <span className="opacity-50 text-center text-xl">Blockchain technology has the highest security level, but the human factor is still present. All <br/> transactions are anonymous and irreversible.</span>
            </div>
            <img className="w-[150vh]" src="/img/security/security.png"/>
        </div>
    )
}