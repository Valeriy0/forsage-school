import react from "react";

export const InstallWallet = () => {

  return (
        <div className="flex flex-col items-center justify-center mt-[200px]">
            <div className=" flex flex-col items-center justify-center space-y-7">
                <span className="text-5xl text-center font-bold">Installing a wallet on your <br/> smartphone or computer</span>
                <span className="opacity-50 text-center">To sign up with Forsage, you need a wallet. An app gives you access to registration and personal <br />dashboard, as well as to the crypto that you earn.</span>
            </div>
            <div className="mt-[70px] flex space-x-12">
                <div className="bg-[#14191B] py-5 px-18 rounded-[25px]  flex flex-col items-center space-y-6">
                    <span className="text-center">Installing <span className="text-[#2980FE]"> TokenPoket </span> <br /> Wallet</span>
                    <img className="w-[200px] h-[200px]" src="/img/wallets/TP.png"/>
                    <button className="flex items-center justify-center space-x-3 border border-[#2980FE] px-6 py-1.5 rounded-[10px]">
                        <span>About</span>
                        <img src="/icons/arrowRight.svg"/>
                    </button>         
                </div>
                <div className="bg-[#14191B] py-5 px-18 rounded-[25px]  flex flex-col items-center space-y-6">
                    <span className="text-center">Installing <span className="text-[#F6851B]"> MetaMask </span> <br /> Wallet</span>
                    <img className="w-[200px] h-[200px]" src="/img/wallets/Metamask.png"/>
                    <button className="flex items-center justify-center space-x-3 border border-[#F6851B] px-6 py-1.5 rounded-[10px]">
                        <span>About</span>
                        <img src="/icons/arrowRight.svg"/>
                    </button>         
                </div>
            </div>
        </div>
  )
}
