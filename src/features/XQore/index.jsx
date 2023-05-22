import React from "react";

export const XQore = () => {
  return (
    <div className="flex justify-between max-w-[1200px] w-full space-x-[100px] sm:flex-col-reverse sm:w-full sm:space-x-0 sm:text-center ">
      <div className="flex-1 sm:w-full">
        <img className="sm:max-w-full sm:w-full" src="/img/xQore/table.png" alt="" />
      </div>
      <div className="flex-1 flex flex-col pt-16">
        <div className="flex flex-col space-y-5 mb-10">
          <span className="text-4xl font-semibold font-montserrat">xQore Levels</span>
          <span className="opacity-50 max-w-[470px] w-full sm:max-w-full">The xqore program is a team marketing tool designed to facilitate team building and increase overall Forsage participant engagement.</span>
        </div>
        <img className="max-w-[410px] sm:max-w-full sm:w-full" src="/img/xQore/matrix.png" alt="" />
      </div>
    </div>
  )
}