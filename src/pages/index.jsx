import React, { useMemo } from 'react';
import { allCourses } from '@/helpers/lessons';
import { FooterSources } from '@/features/FooterSources';
import { useRouter } from 'next/router';
import { CourseCard } from '@/features/Main/CourseCard';

const Index = () => {
  const { push } = useRouter();
  const renderCourses = useMemo(() => {
    return allCourses?.map((item, itemIndex) => <CourseCard {...item} num={itemIndex} key={itemIndex} />
    )
  }, [allCourses])

  const percent = 10;

  const progressBar = useMemo(() => {   
    return (
      <div className="relative percentMain w-full h-[16px] rounded-full">
        <div style={{ width: `${percent}%` }} className={`absolute rounded-full bg-[#3EF6A2] top-0 left-0 h-full`} />
      </div> 
    )
   
  }, [percent])

  return (
    <>
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
            <span className='text-xl font-montserrat'>{percent}%</span>
          </div>
          {progressBar}
        </div>
      </div>
      <div className="space-y-5 flex flex-col items-start justify-start sm:space-y-2 px-[15px] w-full pb-[100px] sm:pb-[50px] z-10">
        <span className="text-2xl font-semibold">Courses</span>
        <div className="w-full grid grid-cols-3 gap-2.5 sm:grid-cols-1">
          {renderCourses}
        </div>
      </div>
      <FooterSources />
    </>
  )
}
export default Index;