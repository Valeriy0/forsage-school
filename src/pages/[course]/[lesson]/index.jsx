import react from "react";
import { useRouter } from "next/router";
import { allCourses } from "@/helpers/lessons";
import { CustomLink } from "@/components/CustomLink";

const Lesson = () => {
  const { query } = useRouter();
  const courseNumber = query?.course?.slice(-1) - 1;
  const lessonNumber = query?.lesson?.slice(-1) - 1;
  const lessonInfo = allCourses?.[courseNumber]?.lessons?.[lessonNumber];

  console.log(lessonInfo); 

const info = [
  {
    title: [<span>Anyone can start their own business with Forsage. All you need <br className="sm:hidden"/> is a smartphone or a computer with Internet access.</span>],
  },
  {
    title: [<span>Payments go directly from user to user and can be tracked <br className="sm:hidden"/>on the blockchain. The platform has no access to the funds..</span>],
  },
  {
    title: [<span>You can start with $10, and your maximum profit is not limited <br className="sm:hidden"/>and depends only on your activity.</span>],
  },
  {
    title: [<span>Decentralized marketing is powered by reliable smart contract<br className="sm:hidden"/> technology. The contract code is open.</span>],
  }
]

  return (
    <div className="flex flex-col p-8 space-y-[20px] ">
      {/* {lessonNumber} */}
      <CustomLink href="/courses">
      <button className="flex items-center space-x-5 sm:absolute z-[1] sm:p-4">
        <div className="w-[40px] h-[40px] bg-[#31B379] rounded-full flex items-center justify-center">
          <img className="" src="/icons/leftArrow.svg"/>
        </div>
        <span className="font-montserrat text-white-500">Back to Lessons</span>
      </button>
      </CustomLink>
      <div className="flex items-center w-full space-x-4">
        <button className="bg-white-150 w-[40px] h-[40px] rounded-full flex items-center justify-center">
          <img className="h-[20px] h-[20px]" src="/icons/arrowLeftIcon.svg"/>
        </button>
        <div className="bg-white-120 rounded-[30px] py-[120px] px-[70px] w-full ">
          <div className="space-y-[70px] h-full">
            <span className="text-3xl font-montserrat font-semibold">Forsage is a platform for starting <br className="sm:hidden"/> an online business where you<br className="sm:hidden"/>  can earn from inviting people.</span>
            <div className="flex flex-col space-y-5">
            {info.map((item) => {
              return (
              <div className=" flex items-start space-x-3">
                <div className="w-[20px] h-[20px] bg-[#3FF6A3] rounded-full" />
                <span className="opacity-50 font-light">{item.title}</span>
              </div>
              )
            })}
            </div>
          </div>
          <div className="">
            <img src="" /> 
          </div>
        </div>
        <button className="bg-white-150 w-[40px] h-[40px] rounded-full flex items-center justify-center">
          <img className="h-[20px] h-[20px]" src="/icons/arrowRightIcon.svg"/>
        </button>
      </div>
    </div>
  )
}

export default Lesson;