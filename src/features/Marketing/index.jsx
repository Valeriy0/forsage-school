import React from "react";

export const Marketing = () => {
    return (
        <div className="flex items-center  mt-[150px]">
            <div className="space-y-8 flex flex-col items-start">
                <span className="text-5xl">Marketing</span>
                <span className="w-[360px] opacity-50">
                FORSAGE Marketing is a matrix system based on decentralized smart contracts technology. Profits come from inviting new partners to your team, who, once registered, stay with you forever, as it is recorded in the blockchain.
                Income is distributed automatically and instantly to participants' personal wallets.
                Your maximum income depends only on your activity.
                </span>
                <button className="border border-white rounded-[10px] px-6 py-1.5 flex items-center justify-center space-x-3">
                    <span>See more</span>
                    <img className="w-[7px]" src="/icons/arrowRIght.svg" />
                </button>
            </div>
            <div className=" flex items-center justify-center">
                <img className="w-[120vh] absolute" src="/img/shadow/traidingSahdow.png"/>
                <img className="w-[110vh] z-[10]" src="/img/marketing/Marketing.png" />
            </div>

        </div>
    )
}