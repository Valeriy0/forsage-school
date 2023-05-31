import react, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { allCourses } from "@/helpers/lessons";
import Spline from "@splinetool/react-spline";
import { CustomLink } from "@/components/CustomLink";

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

    <div className="flex flex-col items-start justify-center space-y-[20px] pb-10 sm:pb-0 sm:space-y-[0] px-[30px] pt-[30px] sm:px-[0px] relative sm:pt-0">
      <CustomLink href="/">
      <button className="flex items-center space-x-5 sm:absolute z-[1] sm:p-4">
        <div className="w-[40px] h-[40px] bg-[#31B379] rounded-full flex items-center justify-center">
          <img className="" src="/icons/leftArrow.svg"/>
        </div>
        <span className="font-montserrat text-white-500">Back to Courses</span>
      </button>
      </CustomLink>
      <div style={styleBg} className=" w-full p-[60px] sm:p-[0] relative ">
        <div className=" space-y-5 relative h-[50vh] flex flex-col items-start justify-end sm:p-5">
          <img className="hidden sm:flex h-[200px] flex items-end justify-end w-[200px] absolute right-0 top-0 " src="/img/courses/logoCourses.png"/>
          <span className="text-5xl font-montserrat font-bold sm:text-start sm:w-[100%] sm:text-center sm:text-3xl "> Start a business <br/> with<span className="text-gradient"> Forsage</span> </span>
            <div className=" sm:hidden flex flex-col space-y-3 font-light opacity-50">
              <span>Knowledges for leaders who are looking to help <br className="sm:hidden"/> participants become more productive, as well as for<br className="sm:hidden"/>  newcomers who are just beginning their journey.</span>
              <span>We've put together materials that will help you develop<br className="sm:hidden"/>  your team and build your business with ease. </span>
            </div>
            <button className="bg-[#31B379] px-8 py-3 rounded-[15px] sm:w-full sm:bg-white-50 sm:backdrop-blur-xl" >
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
      <div className=" hidden sm:flex flex flex-col space-y-3 font-light opacity-50 py-9 px-4">
        <span>Knowledges for leaders who are looking to help <br className="sm:hidden"/> participants become more productive, as well as for<br className="sm:hidden"/>  newcomers who are just beginning their journey.</span>
        <span>We've put together materials that will help you develop<br className="sm:hidden"/>  your team and build your business with ease. </span>
      </div>
      <div className="w-full space-y-5 sm:space-y-3 sm:px-4">
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