import React from 'react';
import { allCourses } from '@/helpers/lessons';
import { NewForsageSources } from '@/features/NewForsageSources';

const Index = () => {

  return (
    <div className="flex flex-col items-start justify-center space-y-[40px] pb-10 sm:pb-0 sm:space-y-[60px] px-[30px] pt-[30px]">
        <img className="h-[37px] w-[]" src="/img/logo.png" alt="" />
      <div className='relative '>
        <img className="relative" src='/img/forsageSchool/schoolBg.png'/>
        <div className="absolute top-1/4 left-[70px] flex flex-col justify-between">
          <span className='text-6xl font-bold font-montserrat'>Forsage School</span>
        </div>
        <div className="absolute bottom-1/4 left-[70px] flex flex-col justify-between space-y-2 w-5/6">
          <div className="flex justify-between items-end">
          <span className='text-xl font-montserrat'>Knowledge level</span>
          <span className='text-xl font-montserrat'>70%</span>
          </div>
          <div className='rounded-full w-full bg-[#3EF6A2] h-[10px]'></div>
        </div>
      </div>
      <a href="/" className="space-y-5 flex flex-col items-start justify-start">
        <span className="text-2xl font-medium">Courses</span>
        <div className="flex flex-wrap space-x-7 ">
        {allCourses?.map((item, itemIndex) =>
        <div className="flex flex-col bg-white-150 p-3 rounded-[20px] space-y-4"> 
          {/* <img className="h-[170px]" src="/img/1lesson/1lesson.png" /> */}
          <img className="h-[170px]" src={item?.img}/>
          <div className="flex flex-col px-4 space-y-[40px] items-start">
            <div className="text-xl font-medium">
              {item?.title}
            </div>
            <div className="text-[#3EF6A2]">
              {item?.lessons?.length} lesson
            </div>
          </div>
        </div>)}
      </div>
      </a>
      <NewForsageSources />
    </div>
  )
}
export default Index;