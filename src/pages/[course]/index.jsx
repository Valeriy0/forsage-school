import react, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { allCourses } from "@/helpers/lessons";
import Spline from "@splinetool/react-spline";

const Course = () => {
  const { query } = useRouter();

  const courseNumber = query?.course?.slice(-1) - 1;
  const lessonsList = allCourses?.[courseNumber]?.lessons;

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

  const styleBg = {
    backgroundImage: `url('/img/bg1course.png')`,
    backgroundRepeat: 'round',
    backgroundSize: 'cover',
  };

  return (

    <div className="flex flex-col items-start justify-center space-y-[20px] pb-10 sm:pb-0 sm:space-y-[60px] px-[30px] pt-[30px]">
      <button className="flex items-center space-x-5">
        <div className="w-[40px] h-[40px] bg-[#31B379] rounded-full flex items-center justify-center">
          <img className="" src="/icons/leftArrow.svg"/>
        </div>
        <a href='/' className="font-montserrat text-white-500">Back to Courses</a>
      </button>
      <div style={styleBg} className="relative w-full p-[60px]">
        <div className=" space-y-5">
        <span className="  sm:w-[100%] sm:text-center sm:text-4xl text-5xl font-montserrat font-bold"> Start a business <br/> with<span className="text-gradient"> Forsage</span> </span>
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
        {lessonsList?.map((item, itemIndex) => {
          const lessonLink = '/' + query?.course + '/lesson' + (itemIndex + 1);
          return (
            <a href={lessonLink} className="bg-white-150 flex items-center space-x-5 w-full p-5 rounded-[30px] lessons_block ">
              <div className="lessonItem_gradient flex items-center justify-center rounded-[15px] w-[60px] h-[60px]">
                <img className="max-w-[75%]" src={`/icons/courses/${courseNumber + 1}/${itemIndex + 1}.svg`} alt="" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm">Lesson {itemIndex + 1}</span>
                <span className="font-medium">{item?.title}</span>
              </div>
            </a>
          )
        })}
      </div>
    </div>

  )
}

export default Course;