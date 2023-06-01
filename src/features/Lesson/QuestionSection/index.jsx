import react, { useState, useMemo } from "react";

export const QuestionSection = ({ lessonInfo, currentQuestion, nextQuestion }) => {

  const [answer, setAnswer] = useState(null);

  const checkAnswer = (num) => {
    if (num === lessonInfo?.test?.[currentQuestion]?.trueAnswer) {
      setAnswer({isTrue: true, key: num});
    } else {
      setAnswer({isTrue: false, key: num});
    }
  }

  const renderFooter = useMemo(() => {
    if (!!answer) {
      if (!answer?.isTrue) {
        return (
          <div className="w-full flex flex-col items-center space-y-2.5 !mt-[30px]">
            <div className="flex items-center justify-center text-center space-x-2.5">
              <img src="/icons/courses/test/clue.svg" alt="" />
              <span>Clue:</span>
            </div>
            <span className="opacity-50 max-w-[75%] w-full text-center">{lessonInfo?.test?.[currentQuestion]?.clue}</span>
          </div>
        )
      }
      return (
        <div className="flex w-full justify-center items-center space-x-5 !mt-[30px]">
          <div className="flex space-x-2.5">
            <img src="/icons/courses/test/success.svg" alt="" />
            <span className="text-lg text-[#2AF598]">Good</span>
          </div>
          <button className="text-lg py-5 px-[30px] border border-white rounded-[15px]" onClick={() =>  {
            nextQuestion();
            setAnswer(null);
          }}>Next</button>
        </div>
      )
    }
    return null
  }, [answer, lessonInfo, currentQuestion])

  return (
    <div className="space-y-11 w-full ">
            <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-0">
              <span className="text-4xl font-bold font-montserrat sm:text-3xl">Check yourself</span>
              <span className="font-montserrat opacity-50">Choose the correct answer</span>
            </div>
            <div className="flex flex-col items-center justify-center w-full ">
              <div className="bg-white-150 rounded-[40px]">
                <div className="bg-green-dark rounded-t-[30px]  py-9 flex items-center justify-center">
                  <span className="font-montserrat font-bold text-2xl text-center sm:text-xl ">{lessonInfo?.test?.[currentQuestion]?.question}</span>
                </div>
                <div className="space-y-5 px-[20px] py-[30px]">
                  {lessonInfo?.test?.[currentQuestion]?.answers?.map((item, itemIndex) => {
                    const trueIndex = itemIndex + 1;
                    const answerBg = !!answer ? answer?.key === trueIndex ? answer?.isTrue ? 'bg-[#04B36E] text-white' : 'bg-[#FF5F55] text-white' : 'bg-white-120 text-white-500' : 'bg-white-120 text-white-500';
                    return (
                    <div onClick={() => checkAnswer(trueIndex)} className={`${answerBg} h-[70px]  px-9 rounded-full flex items-center justify-center tests_block sm:rounded-[20px] sm:px-0`} key={itemIndex}>
                      <span className="font-light text-center flex justify-center text-center">{item}</span>
                    </div>
                    )
                  })}
                  {renderFooter}
                </div>
              </div>
            </div>
          </div>
  )
}