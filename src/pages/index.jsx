import React from 'react';
import { allCourses } from '@/helpers/lessons';

const Index = () => {

  return (
    <div className="flex flex-col items-center justify-center w-screen space-y-[120px] pb-10 sm:pb-0 sm:space-y-[60px]">
      {allCourses?.map((item, itemIndex) => <div> {item?.title} <br/> {item?.lessons?.length} </div>)}
    </div>
  )
}
export default Index;