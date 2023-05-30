import React from "react";

export const NewForsageSources = () => {
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
        <div className="pt-[600px] flex flex-col items-center justify-center space-y-[120px] relative w-full p-[50px] sm:p-0 sm:p-4 sm:space-y-[50px] sm:mt-[30px]">
            <img className="absolute w-full bottom-0 z-[-20]" src="/img/ForsageSources/bg.png"/>
            <div className="sm:px-4 relative w-full flex flex-col items-center    ">
                <div className="absolute w-full backdrop-blur-xl  bottom-0 rounded-[30px] flex justify-evenly pt-[80px] sm:flex-col sm:items-center sm:justify-center pb-8 sm:space-y-5 footer_block ">
                     <div className="flex flex-col space-y-3 sm:items-center sm:justify-center ">
                        <span className="text-2xl font-montserrat font-medium">Website</span>
                        <div className="flex flex-col sm:items-center space-y-2">
                        {website.map((item) => {
                        return (
                            <span className="opacity-50">
                                <a href={item.href} target="_blank">{item.title}</a>
                            </span>
                        )
                        })}
                        </div>
                    </div>
                     <div className="flex flex-col space-y-3 sm:items-center sm:justify-center ">
                        <span className="text-2xl font-montserrat font-medium">Help</span>
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
                    <span className="text-2xl font-montserrat font-medium ">Telegram Bots</span>
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
                    <span className="text-2xl font-montserrat font-medium">Join us</span>
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