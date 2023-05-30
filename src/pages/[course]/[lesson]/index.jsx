import react from "react";
import { useRouter } from "next/router";
import { allCourses } from "@/helpers/lessons";

const Lesson = () => {
  const { query } = useRouter();
  const courseNumber = query?.course?.slice(-1) - 1;
  const lessonNumber = query?.lesson?.slice(-1) - 1;
  const lessonInfo = allCourses?.[courseNumber]?.lessons?.[lessonNumber];

  console.log(lessonInfo); 
  return (
    <div className="">
      {lessonNumber}
    </div>
  )
}

export default Lesson;