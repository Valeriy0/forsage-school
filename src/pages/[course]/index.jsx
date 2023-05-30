import react, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { allCourses } from "@/helpers/lessons";
import Spline from "@splinetool/react-spline";

const Course = () => {
  const { query } = useRouter();

  const courseNumber = query?.course?.slice(-1) - 1;

  console.log(courseNumber, allCourses?.[courseNumber]?.lessons);

  const spline = useRef();
  const [isLoadingAnim, setIsLoadingAnim] = useState(true);

  let animationWrapper = {};

  function onLoad(splineApp) {
    animationWrapper = {
      width: `200%`,
      height: `200%`,
    };
    setIsLoadingAnim(false);
    spline.current = splineApp;
  }

  const myScene= 'https://prod.spline.design/WBWqwfLkAoaoFy7O/scene.splinecode';

  // const lessonLink = query?.course + '/lesson' + itemIndexLesson'a
  return (

    <div className="flex flex-col items-start justify-center space-y-[20px] pb-10 sm:pb-0 sm:space-y-[60px] px-[30px] pt-[30px]">
      <button className="flex items-center space-x-5">
        <div className="w-[40px] h-[40px] bg-[#31B379] rounded-full flex items-center justify-center">
          <img className="" src="/icons/leftArrow.svg"/>
        </div>
        <span className="font-montserrat text-white-500">Back to Courses</span>
      </button>
      <div className="w-full ">
        <img className="relatve w-full" src="/img/bg1course.png"/> 
        <div className="absolute left-[5%] top-1/2 sm:top-[40%] -translate-y-1/2 space-y-[80px]">
        <span className=" -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:w-[100%] sm:text-center sm:text-4xl text-5xl font-montserrat font-bold"> Start a business <br/> with<span className="text-gradient"> Forsage</span> </span>
          <div className="flex flex-col space-y-3 font-light opacity-50">
            <span>Knowledges for leaders who are looking to help <br className="sm:hidden"/> participants become more productive, as well as for<br className="sm:hidden"/>  newcomers who are just beginning their journey.</span>
            <span>We've put together materials that will help you develop<br className="sm:hidden"/>  your team and build your business with ease. </span>
            <span>We're here to help you with every step on your way.</span>
          </div>
          <button className="bg-[#31B379] px-8 py-3 rounded-[15px]" >
            <span>Start learning</span>
          </button>
        </div>
        <div className={`absolute sm:hidden right-0 top-1/2 -translate-y-1/2 z-10 ${!isLoadingAnim && '!w-[55%] !h-[90%]'} `}>
          <Spline
            scene={myScene}
            onLoad={onLoad}
          />
        </div>
      </div>
      <div className="w-full space-y-5">
        <div className="bg-white-150 flex items-center space-x-5 w-full p-5 rounded-[30px] lessons_block ">
          <div className="bg-[#3EF6A2] rounded-[15px] w-[60px] h-[60px] "></div>
          <div className="flex flex-col">
            <span className="text-sm">Lesson 1</span>
            <span className="font-medium">Start a business with Forsage</span>
          </div>
        </div>
        <div className="bg-white-150 flex items-center space-x-5 w-full p-5 rounded-[30px] lessons_block">
          <div className="bg-[#3EF6A2] rounded-[15px] w-[60px] h-[60px] "></div>
          <div className="flex flex-col">
            <span className="text-sm">Lesson 1</span>
            <span className="font-medium">Start a business with Forsage</span>
          </div>
        </div>
        <div className="bg-white-150 flex items-center space-x-5 w-full p-5 rounded-[30px] lessons_block">
          <div className="bg-[#3EF6A2] rounded-[15px] w-[60px] h-[60px] "></div>
          <div className="flex flex-col">
            <span className="text-sm">Lesson 1</span>
            <span className="font-medium">Start a business with Forsage</span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Course;