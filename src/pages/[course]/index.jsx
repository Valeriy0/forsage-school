import react from "react";
import { useRouter } from "next/router";
import { allCourses } from "@/helpers/lessons";

const Course = () => {
  const { query } = useRouter();

  const courseNumber = query?.course?.slice(-1) - 1;

  console.log(courseNumber, allCourses?.[courseNumber]?.lessons);

  return (
    <div className="">
      {courseNumber}
    </div>
  )
}

export default Course;