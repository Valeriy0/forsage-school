import React, { useMemo } from 'react';
import { allCourses } from '@/helpers/lessons';
import { NewForsageSources } from '@/features/NewForsageSources';
import { useRouter } from 'next/router';
import { CourseCard } from '@/features/Main/CourseCard';

const Index = () => {
  const { push } = useRouter();
  const renderCourses = useMemo(() => {
    return allCourses?.map((item, itemIndex) => <CourseCard {...item} num={itemIndex} key={itemIndex} />
    )
  }, [allCourses])

  return (
    <div className="flex flex-col items-start justify-center space-y-[40px] pb-10 sm:pb-0 sm:space-y-[30px]  pt-[30px] sm:pt-0 ">
        <img className="h-[37px] sm:hidden px-[15px] " src="/img/logo.png" alt="" />
        <img className="hidden sm:flex h-[37px] px-[15px]" src="/img/logo-mobile.png" alt="" />
      <div className='relative px-[15px]'>
        <img className="relative sm:hidden" src='/img/forsageSchool/schoolBg.png'/>
        <img className="relative hidden sm:block" src='/img/forsageSchool/schoolBgMod.png'/>
        <div className="absolute top-1/4 left-[70px] flex flex-col justify-between sm:top-5 sm:left-[30px]">
          <span className='text-6xl font-bold font-montserrat sm:text-2xl'>Forsage School</span>
        </div>
        <div className="absolute bottom-1/4 left-[70px] flex flex-col justify-between space-y-2 w-5/6 sm:bottom-5 sm:left-[30px]">
          <div className="flex justify-between items-end">
          <span className='text-xl font-montserrat sm:text-base'>Knowledge level</span>
          <span className='text-xl font-montserrat'>70%</span>
          </div>
          <div className='rounded-full w-full bg-[#3EF6A2] h-[10px]'></div>
        </div>
      </div>
      <div className="space-y-5 flex flex-col items-start justify-start sm:space-y-2 px-[15px] sm:w-full">
        <span className="text-2xl font-semibold">Courses</span>
        <div className="flex flex-wrap space-x-7 sm:flex-col sm:space-x-0 sm:space-y-4 sm:w-full">
          {renderCourses}
        </div>
      </div>
      <NewForsageSources  />
    </div>
  )
}
export default Index;