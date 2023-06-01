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
          <QuestionSection currentQuestion={currentQuestion} nextQuestion={nextQuestion} lessonInfo={lessonInfo} />
        </div>
      )
    }
    if (currentSlide === maxLessonSlides + 1) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-start space-y-7 ">
          <div className="button-gradient p-[1px] flex justify-center items-center rounded-[30px]">
            <div className="flex flex-col items-center bg-[#131314] rounded-[30px] relative px-[68px] py-[60px] ">
              <img className="absolute h-[500px] top-0 left-0 " src="/img/testFinish/leftConfity.png"/>
              <img className="absolute h-[500px] top-0 right-0 " src="/img/testFinish/rightConfity.png"/>
              <div className=" flex flex-col items-center space-y-[76px]">
                <span className="font-montserrat text-3xl font-bold">Сongratulations!</span>
                  <img className="h-[200px] z-[11] relative " src="/img/testFinish/success.png" alt="" />
                  <img className=" absolute top-[-25px]" src="/img/testFinish/successShadow.png"/>
                <span className="text-center text-xl">you have <br /> completed {lessonNumber + 1} lesson</span>
              </div>
            </div>
          </div>
          <div className="button-gradient p-[1px] rounded-[15px]">
            <CustomLink href="/courses1/lesson2">
              <button onClick={() =>setCurrentSlide(0)} className="rounded-[15px] py-3 px-7 w-full bg-[#131314] w-full ">
                <span className="text-xl font-montserrat font-medium ">Next lesson</span>
              </button>
            </CustomLink>
          </div>
      </div>
      )
    }
      
  }, [currentSlide, maxLessonSlides, lessonInfo, currentSlide, lessonNumber, currentQuestion])



  return (
    <div className="w-full h-screen flex flex-col p-8 space-y-[20px] ">
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

Lesson.Layout = LessonLayout;

export default Lesson;