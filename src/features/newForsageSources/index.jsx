import React from "react";

export const FooterSources = () => {
    const website = [
        {
            title: 'forsage.io',
            href: "https://forsage.io/",
        },
        {
            title: 'busd.forsage.io',
            href: "https://busd.forsage.io/",
        }
    ]
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
            icon: '/icons/socials/telegram.svg',
            href: 'https://t.me/forsageio_official/',
        },
        {
            icon: '/icons/socials/instagram.svg',
            href: 'https://www.instagram.com/forsagematrix/ ',
        },
        {
            icon: '/icons/socials/youtube.svg',
            href: 'https://www.youtube.com/channel/UC4ZUzYVAw01R9ERwBte-eQA',
        },
        {
            icon: '/icons/socials/mingcute_medium-fill.svg',
            href: 'https://forsageio.medium.com/',
        },
        {
            icon: '/icons/socials/gitbook.svg',
            href: 'http://support.forsage.io/',
        },
        {
            icon: '/icons/socials/discord.svg',
            href: 'https://discord.gg/forsage',
        },
        {
            icon: '/icons/socials/twitter.svg',
            href: 'https://twitter.com/forsageofficial',
        },
    ]
    return(
        <div className=" flex flex-col items-center justify-center space-y-[120px] relative w-full p-[50px] sm:p-0 sm:py-4 sm:px-2 sm:space-y-[30px] sm:mt-[30px] ">
            <img className="absolute w-full bottom-0 z-[-20] px-[15px] sm:px-0" src="/img/ForsageSources/bg.png"/>
            <div className=" relative w-full flex flex-col items-center     ">
                <div className=" w-full backdrop-blur-xl  bottom-0 rounded-[30px] flex justify-evenly pt-[80px] sm:flex-col sm:items-center sm:justify-center pb-8 sm:space-y-5 footer_block sm:pt-[20px] ">
                     <div className="flex flex-col space-y-3 sm:items-center sm:justify-center ">
                        <span className="text-2xl font-montserrat font-medium text-white">Website</span>
                        <div className="flex flex-col sm:items-center space-y-2">
                        {website.map((item) => {
                        return (
                            <span className="opacity-50 text-black-00">
                                <a href={item.href} target="_blank">{item.title}</a>
                            </span>
                        )
                        })}
                        </div>
                    </div>
                     <div className="flex flex-col space-y-3 sm:items-center sm:justify-center ">
                        <span className="text-2xl font-montserrat font-medium text-white">Help</span>
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
                    <span className="text-2xl font-montserrat font-medium text-white ">Telegram Bots</span>
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
                    <div className="flex flex-col items-center space-y-3 sm:items-center sm:justify-center">
                        <span className="text-2xl font-montserrat font-medium text-white">Join us</span>
                        <div className="flex items-center justify-center sm:items-center space-x-4">
                        {join.map((item) => {
                                return (

                                    <a href={item.href} target="_blank">{item.title}
                                        <img className="" src={item.icon}/>
                                    </a>
                                )
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}