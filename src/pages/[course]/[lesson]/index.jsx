import react, { useState, useMemo } from "react";
import { useRouter } from "next/router";
import { allCourses } from "@/helpers/lessons";
import { CustomLink } from "@/components/CustomLink";
import { QuestionSection } from "@/features/Lesson/QuestionSection";

const Lesson = () => {
  const { query } = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const courseNumber = query?.course?.slice(-1) - 1;
  const lessonNumber = query?.lesson?.slice(-1) - 1;
  const lessonInfo = allCourses?.[courseNumber]?.lessons?.[lessonNumber];
  const maxLessonSlides = lessonInfo?.slides.length;
  
  const lessonTest = lessonInfo?.test;
  const [currentQuestion, setCurrentQuestion] = useState(0);

  console.log(lessonTest);

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
          <QuestionSection currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} lessonInfo={lessonInfo} />
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