
import react, { useState, useMemo } from "react";
import { useRouter } from "next/router";
import { allCourses } from "@/helpers/lessons";
import { CustomLink } from "@/components/CustomLink";
import { QuestionSection } from "@/features/Lesson/QuestionSection";
import { LessonLayout } from "@/Layouts";

const Lesson = () => {
  const { query } = useRouter();

  const [currentSlide, setCurrentSlide] = useState(0);
  const courseNumber = query?.course?.slice(-1) - 1;
  const lessonNumber = query?.lesson?.slice(-1) - 1;
  const lessonInfo = allCourses?.[courseNumber]?.lessons?.[lessonNumber];
  const maxLessonSlides = lessonInfo?.slides.length;
  
  const maxQuestions = lessonInfo?.test.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const nextQuestion = () => {
    if(currentQuestion < maxQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  console.log(lessonNumber);

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


  const renderContent = useMemo(() => {
    if (currentSlide < maxLessonSlides)
    {
      return (
        <div className="flex sm:flex-col bg-white-120 rounded-[30px] w-full h-full space-x-10 sm:space-x-0 sm:space-y-2.5 px-[70px] sm:px-5 sm:pt-10 sm:pb-5">
            <div className="flex flex-col justify-center items-start space-y-[70px] h-full flex-1 sm:space-y-5">
              <span className="text-3xl font-montserrat font-semibold sm:text-xl">
                {lessonInfo?.slides?.[currentSlide]?.title}
              </span>
              {lessonInfo?.slides?.[currentSlide]?.renderContent()}
            </div>
            <div className="flex-1 flex items-center justify-center h-full">
              {lessonInfo?.slides?.[currentSlide]?.renderImg()}
            </div>
            <div className="hidden sm:flex justify-between w-full">
              {prevBtn}
              {nextBtn}
            </div>
          </div>
        )
    }
    if (currentSlide === maxLessonSlides) {
      return (
        <div className="w-full h-full flex flex-col ">
          <QuestionSection currentQuestion={currentQuestion} nextQuestion={nextQuestion} lessonInfo={lessonInfo} />
        </div>
      )
    }
    if (currentSlide === maxLessonSlides + 1) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-start space-y-7  ">
          <div className="button-gradient p-[1px] flex justify-center items-center rounded-[30px] h-[585px] sm:p-0  sm:w-full">
            <div className="flex flex-col items-center  bg-[#131314] rounded-[30px] relative px-[68px] py-[60px] h-full sm:w-full sm:px-[30px]">
              <img className="absolute h-[500px] top-0 left-0 " src="/img/testFinish/leftConfity.png"/>
              <img className="absolute h-[500px] top-0 right-0 " src="/img/testFinish/rightConfity.png"/>
              <div className=" flex flex-col items-center justify-between h-full">
                <span className="font-montserrat text-3xl font-bold">Сongratulations!</span>
                  <img className="h-[190px] z-[11] absolute top-[50.75%] left-1/2 -translate-x-1/2 -translate-y-1/2 " src="/img/testFinish/success.png" alt="" />
                  <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="/img/testFinish/successShadow.png"/>
                <span className="text-center text-xl">you have <br /> completed {lessonNumber + 1} lesson</span>
              </div>
            </div>
          </div>
          <div className="button-gradient p-[1px] rounded-[15px] sm:w-full sm:p-0">
            <CustomLink href="/courses1/lesson2">
              <button onClick={() =>setCurrentSlide(0)} className="rounded-[15px] py-3 px-7 w-full bg-[#131314] sm:bg-[#31B277]  w-full ">
                <span className="text-xl font-montserrat font-medium ">Next lesson</span>
              </button>
            </CustomLink>
          </div>
      </div>
      )
    }
      
  }, [currentSlide, maxLessonSlides, lessonInfo, currentSlide, lessonNumber, currentQuestion, prevBtn, nextBtn])



  return (
    <div className="w-full h-screen sm:min-h-screen sm:h-full flex flex-col p-8 space-y-[20px] sm:p-4">
      {/* {lessonNumber} */}
      <CustomLink href={`/courses${courseNumber + 1}`}>
        <button className="flex items-center space-x-5 z-[1] sm:p-4">
          <div className="w-[40px] h-[40px] bg-[#31B379] rounded-full flex items-center justify-center">
            <img className="" src="/icons/leftArrow.svg"/>
          </div>
          <span className="font-montserrat text-white-500">Back to Lessons</span>
        </button>
      </CustomLink>
      {/* content */}
      <div className="h-full flex-1 flex items-center w-full space-x-4 sm:space-x-0">
        <div className="sm:hidden">
          {prevBtn}
        </div>
        {/* slide content */}
        {renderContent}
        <div className="sm:hidden">
          {nextBtn}
        </div>
      </div>
    </div>
  )
}

Lesson.Layout = LessonLayout;

export default Lesson;