import React from "react";

export const ForsageSources = () => {
    const help = [
        {
            title: 'Support Center',
            href: '',
        },
        {
            title: 'Knowledge',
            href: '',
        }
    ]
    const bots = [
        {
            title: 'BUSD Notifier',
            href: '',
        },
        {
            title: 'Ethereum Notifier',
            href: '',
        },
        {
            title: 'Tron Notifier',
            href: '',
        },
        {
            title: 'BSC Explorer',
            href: '',
        },
        {
            title: 'Support',
            href: '',
        },
    ]
    const join = [
        {
            title: 'Telegram',
            href: '',
        },
        {
            title: 'Instagram',
            href: '',
        },
        {
            title: 'YouTube',
            href: '',
        },
        {
            title: 'Medium',
            href: '',
        },
        {
            title: 'GitBook',
            href: '',
        },
        {
            title: 'Discord',
            href: '',
        },
        {
            title: 'Twitter',
            href: '',
        },
    ]
    return(
        <div className="mt-[20px] flex flex-col items-center justify-center space-y-[120px] relative w-full p-[50px] sm:p-0 sm:p-4">

            <img className="absolute w-full bottom-0 z-[-20]" src="/img/ForsageSources/bg.png"/>
            <span className="text-5xl font-bold sm:text-4xl w-full text-center">All official sources of FORSAGE</span>
            <div className="relative w-full flex flex-col items-center  ">
                <div className="relative flex items-center justify-center   ">
                    <img className="h-[90vh] z-11 relative sm:hidden" src="/img/ForsageSources/phone.png" />
                    <img className="hidden sm:flex mb-[500px] h-[70vh] w-11/12 relative" src="/img/ForsageSources/phoneMob.png" />
                    <div className="absolute top-[200px] flex flex-col items-center justify-center space-y-4">
                        <button className="border border-white rounded-[10px] px-16 py-2.5 flex items-center justify-center space-x-3 sm:w-full sm:py-3 w-full">
                            <span className="text-xl text-white font-bold">forsage.io</span>
                        </button>
                        <button className="border border-white rounded-[10px] px-17 py-2.5 flex items-center justify-center space-x-3 sm:w-full sm:py-3 w-full  ">
                            <span className="text-xl text-white font-bold">busd.forsage.io</span>
                        </button>
                    </div>
                </div>
                <div className="absolute w-full backdrop-blur-3xl  bottom-0 rounded-[30px] flex justify-evenly pt-[80px] sm:flex-col sm:items-center sm:justify-center pb-8 space-y-5 ">
                    <div className="flex flex-col space-y-3 sm:items-center sm:justify-center">
                        <span className="text-2xl">Help</span>
                        <div className="flex flex-col sm:items-center space-y-2">
                        {help.map((item) => {
                        return (
                            <span className="opacity-50">{item.title}</span>
                        )
                        })}
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 sm:items-center sm:justify-center ">
                    <span className="text-2xl ">Telegram Bots</span>
                    <div className="flex flex-col sm:items-center space-y-2">
                        {bots.map((item) => {
                            return (
                                <span className="opacity-50">{item.title}</span>
                            )
                         })}
                         </div>
                    </div>
                    <div className="flex flex-col space-y-3 sm:items-center sm:justify-center">
                    <span className="text-2xl">Join us</span>
                    <div className="flex flex-col sm:items-center space-y-2">
                    {join.map((item) => {
                            return (
                                <span className="opacity-50">{item.title}</span>
                            )
                    })}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}