import react from "react";

export const QuestionSection = ({ lessonInfo, currentQuestion, setCurrentQuestion }) => {
  return (
    <div className="space-y-11 w-full ">
            <div className="flex flex-col items-center justify-center space-y-4">
              <span className="text-4xl font-bold font-montserrat">Check yourself</span>
              <span className="font-montserrat opacity-50">Choose the correct answer</span>
            </div>
            <div className="flex flex-col items-center justify-center w-full ">
              <div className="bg-white-150 rounded-[40px]">
                <div className="bg-green-dark rounded-t-[30px]  py-9 flex items-center justify-center">
                  <span className="font-montserrat font-bold text-2xl text-center ">{lessonInfo?.test?.[currentQuestion]?.question}</span>
                </div>
                <div className="space-y-5 px-[20px] py-[30px]">
                  {lessonInfo?.test?.[currentQuestion]?.answers?.map((item, itemIndex) => {
                    return (
                    <div className="bg-white-120 h-[70px]  px-9 rounded-full flex items-center justify-center tests_block ">
                      <span className="opacity-50 font-light text-center flex justify-center text-center ">{item}</span>
                    </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
  )
}