import React from "react";

export const ForsageSources = () => {
    const help = [
        {
            title: 'Support Center',
            href: 'https://support.forsage.io/article/',
        },
        {
            title: 'Knowledge',
            href: 'https://support.forsage.io/article/',
        }
    ]
    const bots = [
        {
            title: 'BUSD Notifier',
            href: 'https://t.me/busd_forsage_io_bot',
        },
        {
            title: 'Ethereum Notifier',
            href: ' https://t.me/forsage_io_bot',
        },
        {
            title: 'Tron Notifier',
            href: 'https://t.me/tronforsage_bot',
        },
        {
            title: 'BSC Explorer',
            href: 'https://t.me/BSCexplorerbot',
        }
    ]
    const join = [
        {
            title: 'Telegram',
            href: 'https://t.me/forsageio_official/',
        },
        {
            title: 'Instagram',
            href: 'https://www.instagram.com/forsagematrix/ ',
        },
        {
            title: 'YouTube',
            href: 'https://www.youtube.com/channel/UC4ZUzYVAw01R9ERwBte-eQA',
        },
        {
            title: 'Medium',
            href: 'https://forsageio.medium.com/',
        },
        {
            title: 'GitBook',
            href: 'http://support.forsage.io/',
        },
        {
            title: 'Discord',
            href: 'https://discord.gg/forsage',
        },
        {
            title: 'Twitter',
            href: 'https://twitter.com/forsageofficial',
        },
    ]
    return(
        <div className="mt-[20px] flex flex-col items-center justify-center space-y-[120px] relative w-full p-[50px] sm:p-0 sm:p-4">

            <img className="absolute w-full bottom-0 z-[-20]" src="/img/ForsageSources/bg.png"/>
            <span className="text-5xl font-bold sm:text-4xl w-full text-center font-montserrat">All official sources of FORSAGE</span>
            <div className="relative w-full flex flex-col items-center  ">
                <div className="relative flex items-center justify-center   ">
                    <img className="h-[95vh] z-11 relative sm:hidden lg:mb-[50px]" src="/img/ForsageSources/phone.png" />
                    <img className="hidden sm:flex mb-[460px] h-[90vh]  w-11/12 relative" src="/img/ForsageSources/phoneMob.png" />
                    <div className="absolute top-[200px] flex flex-col items-center justify-center space-y-4 max-w-[250px] w-full">
                        <div className="button-gradient p-[1px] flex justify-center items-center rounded-[10px] w-full">
                            <button className="cryptoMain-card-bg rounded-[10px] py-2.5 flex items-center justify-center space-x-3 sm:py-3 w-full">
                                <span className="text-xl text-white font-bold font-montserrat">
                                    <a href="https://forsage.io/" target="_blank">forsage.io</a>
                                    </span>
                            </button>
                        </div>
                        <div className="button-gradient p-[1px] flex justify-center items-center rounded-[10px] w-full">
                            <button className="cryptoMain-card-bg rounded-[10px] py-2.5 flex items-center justify-center space-x-3 sm:py-3 w-full">
                                <span className="text-xl text-white font-bold font-montserrat">  <a href="https://busd.forsage.io/" target="_blank">busd.forsage.io</a></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute w-full backdrop-blur-3xl  bottom-0 rounded-[30px] flex justify-evenly pt-[80px] sm:flex-col sm:items-center sm:justify-center pb-8 sm:space-y-5 ">
                <div className="flex flex-col space-y-3 sm:items-center sm:justify-center ">
                        <span className="text-2xl font-montserrat">Help</span>
                        <div className="flex flex-col sm:items-center space-y-2">
                        {help.map((item) => {
                        return (
                            <span className="opacity-50">
                                <a href={item.href} target="_blank">{item.title}</a>
                            </span>
                        )
                        })}
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 sm:items-center sm:justify-center ">
                    <span className="text-2xl font-montserrat ">Telegram Bots</span>
                    <div className="flex flex-col sm:items-center space-y-2">
                        {bots.map((item) => {
                            return (
                            <span className="opacity-50">
                                <a href={item.href} target="_blank">{item.title}</a>
                            </span>
                            )
                         })}
                         </div>
                    </div>
                    <div className="flex flex-col space-y-3 sm:items-center sm:justify-center">
                    <span className="text-2xl font-montserrat">Join us</span>
                    <div className="flex flex-col sm:items-center space-y-2">
                    {join.map((item) => {
                            return (
                            <span className="opacity-50">
                                <a href={item.href} target="_blank">{item.title}</a>
                            </span>
                            )
                    })}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}