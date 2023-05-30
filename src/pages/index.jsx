import React, { useMemo } from 'react';
import { allCourses } from '@/helpers/lessons';
import { NewForsageSources } from '@/features/NewForsageSources';
import { useRouter } from 'next/router';
import { CourseCard } from '@/features/Main/CourseCard';

const Index = () => {
  const { push } = useRouter();
  const renderCourses = useMemo(() => {
    return allCourses?.map((item, itemIndex) => <CourseCard {...item} key={itemIndex} />
    )
  }, [allCourses])

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
      <div className="space-y-5 flex flex-col items-start justify-start">
        <span className="text-2xl font-medium">Courses</span>
      <div className="flex flex-wrap space-x-7 ">
        {renderCourses}
      </div>
      </div>
      <NewForsageSources />
    </div>
  )
}
export default Index;