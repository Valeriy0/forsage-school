import react, { useState, useMemo } from "react";
import { useRouter } from "next/router";
import { allCourses } from "@/helpers/lessons";
import { CustomLink } from "@/components/CustomLink";

const Lesson = () => {
  const { query } = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const courseNumber = query?.course?.slice(-1) - 1;
  const lessonNumber = query?.lesson?.slice(-1) - 1;
  const lessonInfo = allCourses?.[courseNumber]?.lessons?.[lessonNumber];
  const maxLessonSlides = lessonInfo?.slides.length;

  const prevBtn = useMemo(() => {
    return (
      <div className="w-[40px] h-[40px]">
        {currentSlide > 0 && (
          <button onClick={() => setCurrentSlide(currentSlide - 1)} className="bg-white-150 w-full h-full rounded-full flex items-center justify-center">
            <img className="h-[20px] h-[20px]" src="/icons/arrowLeftIcon.svg"/>
          </button>
        )}
      </div>
    )
  }, [currentSlide]);

  const nextBtn = useMemo(() => {
    return (
      <div className="w-[40px] h-[40px]">
        {currentSlide < maxLessonSlides - 1 && (
          <button onClick={() => setCurrentSlide(currentSlide + 1)} className="bg-white-150 w-full h-full rounded-full flex items-center justify-center">
            <img className="h-[20px] h-[20px]" src="/icons/arrowRightIcon.svg"/>
          </button>
        )}
      </div>
    )
  }, [currentSlide, maxLessonSlides])



  return (
    <div className="h-full flex flex-col p-8 space-y-[20px] ">
      {/* {lessonNumber} */}
      <CustomLink href={`/courses${courseNumber + 1}`}>
      <button className="flex items-center space-x-5 sm:absolute z-[1] sm:p-4">
        <div className="w-[40px] h-[40px] bg-[#31B379] rounded-full flex items-center justify-center">
          <img className="" src="/icons/leftArrow.svg"/>
        </div>
        <span className="font-montserrat text-white-500">Back to Lessons</span>
      </button>
      </CustomLink>
      {/* content */}
      <div className="h-full flex-1 flex items-center w-full space-x-4">
        {prevBtn}
        {/* slide content */}
        <div className="flex bg-white-120 rounded-[30px] w-full h-full space-x-10">
          <div className="pl-[70px] flex flex-col justify-center items-center space-y-[70px] h-full flex-1">
            <span className="text-3xl font-montserrat font-semibold">
              {lessonInfo?.slides?.[currentSlide]?.title}
            </span>
            {lessonInfo?.slides?.[currentSlide]?.renderContent()}
          </div>
          <div className="flex-1 flex items-center justify-center h-full">
            {lessonInfo?.slides?.[currentSlide]?.renderImg()}
          </div>
        </div>
        {nextBtn}
      </div>
    </div>
  )
}

export default Lesson;