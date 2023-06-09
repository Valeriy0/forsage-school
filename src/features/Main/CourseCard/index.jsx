import react, { useState } from "react";
import Countdown from 'react-countdown';
import { isBefore } from 'date-fns';

export const CourseCard = ({ img , lessons, title, timeStart, num, imgMob }) => {
  const courseLink = '/course' + (num + 1);
  const [isCompletedTimer, setIsCompletedTimer] = useState(
    !isBefore(new Date(), new Date(timeStart)),
  );

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return null;
    } else if (days > 0) {
      return (
        <span className="text-white text-[22px] font-bold sm:text-[20px]">
          {days} days {hours} hours
        </span>
      );
    } else if (days === 0 && hours > 1) {
      return (
        <span className="text-white text-[22px] font-bold sm:text-[20px]">
          {hours} hours {minutes} minutes
        </span>
      );
    } else if (days === 0 && hours === 0) {
      return (
        <span className="text-white text-[22px] font-bold sm:text-[20px]">
          {minutes} minutes {seconds} seconds
        </span>
      );
    }

    return (
      <span className="text-white text-[22px] font-bold sm:text-[20px]">
        {hours} h {minutes} m {seconds} s
      </span>
    );
  };

  if (!isCompletedTimer) {
    return (
      <div className="flex flex-col bg-white-150 rounded-[20px] space-y-6 sm:flex-row sm:items-center sm:space-y-0 items-center justify-center sm:items-start sm:justify-start sm:p-3"> 
        <img className="h-[110px] sm:h-[100px] sm:bg-white-50 sm:rounded-[20px] sm:p-3" src='/icons/loadingCourse.svg'/>
        <div className="flex flex-col px-4 space-y-[40px] items-start w-full">
          <div className="flex items-center text-5xl w-full">
            {/* <Countdown
              onComplete={() => setIsCompletedTimer(true)}
              date={timeStart}
              renderer={renderer}
            /> */}
            <span className="opacity-50 text-sm text-center w-full">The course is under development</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <a href={courseLink} className="flex flex-col bg-white-150 p-3 rounded-[20px] space-y-4 sm:space-y-0 sm:flex-row "> 
      <img className="h-[170px]  sm:hidden" src={img}/>
      <img className="h-[100px] hidden sm:flex" src={imgMob}/>
      <div className="flex flex-col px-4 space-y-[40px] items-start sm:space-y-[10px] sm:justify-center">
        <div className="text-xl font-medium sm:text-base">
          {title}
        </div>
        <div className="text-[#3EF6A2]">
          {lessons?.length} lessons
        </div>
      </div>
    </a>
  )
}