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
        {currentSlide < maxLessonSlides + 1 && (
          <button onClick={() => setCurrentSlide(currentSlide + 1)} className="bg-white-150 w-full h-full rounded-full flex items-center justify-center">
            <img className="h-[20px] h-[20px]" src="/icons/arrowRightIcon.svg"/>
          </button>
        )}
      </div>
    )
  }, [currentSlide, maxLessonSlides])

  console.log(currentSlide, maxLessonSlides)

  const renderContent = useMemo(() => {
    if (currentSlide < maxLessonSlides)
    {
      return (
          <div className="flex bg-white-120 rounded-[30px] w-full h-full space-x-10 px-[70px]">
            <div className="flex flex-col justify-center items-start space-y-[70px] h-full flex-1">
              <span className="text-3xl font-montserrat font-semibold">
                {lessonInfo?.slides?.[currentSlide]?.title}
              </span>
              {lessonInfo?.slides?.[currentSlide]?.renderContent()}
            </div>
            <div className="flex-1 flex items-center justify-center h-full">
              {lessonInfo?.slides?.[currentSlide]?.renderImg()}
            </div>
          </div>
        )
    }
    if (currentSlide === maxLessonSlides) {
      return (
        <div className="w-full h-full flex flex-col ">
          <div className="space-y-11 w-full ">
            <div className="flex flex-col items-center justify-center space-y-4">
              <span className="text-4xl font-bold font-montserrat">Check yourself</span>
              <span className="font-montserrat opacity-50">Choose the correct answer</span>
            </div>
            <div className="flex flex-col items-center justify-center w-full ">
              <div className="bg-white-150 rounded-[40px]">
                <div className="bg-green-dark rounded-t-[30px]  py-9 flex items-center justify-center">
                  <span className="font-montserrat font-bold text-2xl text-center ">How do you earn at Forsage ?</span>
                </div>
                <div className="space-y-5 px-[20px] py-[30px]">
                  <div className="bg-white-120 h-[70px]  px-9 rounded-full flex items-center justify-center tests_block ">
                    <span className="opacity-50 font-light text-center flex justify-center text-center ">Activate levels in programs and wait for passive income.</span>
                  </div>
                  <div className="bg-white-120 h-[70px] px-9 rounded-full flex items-center justify-center tests_block">
                    <span className="opacity-50 font-light flex justify-center text-center">Invite partners to your team and activate levels and programs <br className="sm:hidden"/> together.</span>
                  </div>
                  <div className="bg-white-120 h-[70px] px-9 rounded-full flex items-center justify-center tests_block">
                    <span className="opacity-50 font-light flex justify-center  text-center">Wait for income from your upline partner.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    if (currentSlide === maxLessonSlides + 1) {
      return (
        <div className="w-full h-full">
          <div className="">
            <span>Сongratulations!</span>
            <img src="" alt="" />
            <span>you have <br /> completed {lessonNumber} lesson</span>
          </div>
        </div>
      )
    }
      
  }, [currentSlide, maxLessonSlides, lessonInfo, currentSlide, lessonNumber])



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
        {renderContent}
        {nextBtn}
      </div>
    </div>
  )
}

export default Lesson;