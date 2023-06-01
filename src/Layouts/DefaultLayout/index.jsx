import react from "react";

export const DefaultLayout = ({ children }) => {
  return (
    <div className='w-screen h-screen'>
      <div className="flex flex-col items-center justify-center pb-10 sm:pb-0  pt-[30px] sm:pt-0">
        <div className="max-w-[1290px] w-full flex flex-col items-start justify-center space-y-10  sm:space-y-[30px] ">
          {children}
        </div>
      </div>
    </div>
  )
}