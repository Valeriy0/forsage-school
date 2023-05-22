import react from "react";

export const NotTraidng = () => {

    const traiding = [
        {
            title: "Minimum entry cost",
            img: "/icons/closeIcon.svg",
            className: "opacity-50",
        },
        {
            title: "Analytical mindset",
            img: "/icons/сheckIcon.svg"
        },
        {
            title: "Minimum theory knowledge for a successful start",
            img: "/icons/closeIcon.svg",
            className: "opacity-50",
        },
        {
            title: "Work from anywhere in the world",
            img: "/icons/сheckIcon.svg"
        },
        {
            title: "Risk of losing income",
            img: "/icons/сheckIcon.svg"
        },
        {
            title: "Unlimited income",
            img: "/icons/сheckIcon.svg"
        }
    ]
    const forsage = [
        {
            title: "Minimum entry cost",
            img: "/icons/сheckIcon.svg"
        },
        {
            title: "Analytical mindset",
            img: "/icons/closeIcon.svg",
            className: "opacity-50",
        },
        {
            title: "Minimum theory knowledge for a successful start",
            img: "/icons/сheckIcon.svg"
        },
        {
            title: "Work from anywhere in the world",
            img: "/icons/сheckIcon.svg"
        },
        {
            title: "Risk of losing income",
            img: "/icons/closeIcon.svg",
            className: "opacity-50",
        },
        {
            title: "Unlimited income",
            img: "/icons/сheckIcon.svg"
        }
    ]

  return (
   <div className="py-[150px] flex flex-col items-center justify-center space-y-[70px]">
        <div className="flex flex-col items-center justify-center space-y-[30px]">
            <span className="text-5xl font-bold font-montserrat">Forsage is not trading</span>
            <span className="text-lg opacity-50 text-center">Forsage is a network-type business with a clear and transparent economic model that has been <br /> successfully operating for 3 years.</span>
        </div>
        <img className="w-[1000px] absolute pt-[200px] left-1/2 -translate-x-1/2 z-[-10] " src="/img/shadow/traidingSahdow.png" />
            <div className="bg-[#131314] w-[600px] rounded-[30px] p-5 flex space-x-6">
                <div className="border border-1 boder-green h-full w-full rounded-[20px] flex flex-col ">
                    <span className="text-2xl mt-[15px] text-center ">Traiding</span>
                    <div className="my-[40px] space-y-6 ">
                    {traiding.map((item, itemIndex) => {
                        return (
                        <div className={`pl-[50px] flex space-x-[18px] pr-[10px] ${item.className}`}>
                            <img className="w-[12px]" src={item.img} />
                            <span className="text-[13px]">{item?.title}</span>
                        </div>
                        )
                    })}
                    </div>
                </div>
                <div className="border border-1 boder-green h-full w-full rounded-[20px] flex flex-col ">
                    <span className="text-2xl mt-[15px] text-center">Forsage</span>
                    <div className="my-[40px] space-y-6">
                    {forsage.map((item, itemIndex) => {
                        return (
                        <div className={`pl-[50px] flex space-x-[18px] pr-[10px] ${item.className}`}>
                            <img className="w-[12px]" src={item.img} />
                            <span className="text-[13px]">{item?.title}</span>
                        </div>
                        )
                    })}
                    </div>
                </div>
            </div>
   </div>
  )
}