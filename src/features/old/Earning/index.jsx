import react, { useState } from "react";


export const Earning = ({ id, title, testContent }) => {

    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [currentQuestionList, setCurrentQuestionList] = useState(0);
    const questions = testContent[currentQuestionList]?.questions;
    const currentTitle = testContent[currentQuestionList]?.title;
    const maxQuestionsList = testContent?.length;

    const isCurrentTrue = !!questions[currentAnswer]?.isTrue ? questions[currentAnswer]?.isTrue : false;

    const backgroundList = {
        left: `/img/earning/${id}/left.png`,
        right: `/img/earning/${id}/right.png`,
    };

    const renderIcon = () => {
        if (!!questions[currentAnswer]) {
            if (questions[currentAnswer]?.isTrue) {
                return <img className="w-[40px]" src='/img/test/suc.png'/>
            } else {
                return <img className="w-[40px]" src='/img/test/err.png'/>
            }
        } 
        return null
    }

    const nextList = () => {
        setCurrentAnswer(null);
        setCurrentQuestionList(currentQuestionList + 1)
    }

    const circleBlur = !!testContent[currentAnswer] ? isCurrentTrue ? '/img/earning/suc-blur.png' : '/img/earning/err-blur.png' : '/img/earning/suc-blur.png';

  return (
        <div id={`recap-${id}`} className="relative flex flex-col justify-center items-center space-y-14 pt-[50px] pb-[100px] w-full sm:space-y-0">
            <div className="flex justify-center sm:w-full ">
                <img className="absolute h-[23vh] -left-5 hidden sm:flex" src={backgroundList?.left} />
                <span className="text-4xl font-medium sm:text-3xl sm:mt-[30px] sm:font-bold font-montserrat">Let's recap</span>
                <img className="absolute h-[18vh] right-0 hidden sm:flex " src={backgroundList?.right} />
            </div>
            <div className=" flex items-start justify-center w-full px-4 sm:w-full ">
                <img className="absolute w-[55vh] z-[-20] top-0 left-0 sm:hidden" src={backgroundList?.left} />
                <div className=" flex flex-col relative items-center sm:w-full">
                    <div className={`${!!questions[currentAnswer] ? isCurrentTrue ? 'button-gradient' : 'test-gradient-wrapper-err' : 'button-gradient'}  p-[1px] flex justify-center items-center mt-[50px] relative sm:top-[50px] rounded-[30px]`}>           
                        <div className="bg-[#14191B] rounded-[30px] py-11 px-[50px] flex flex-col items-center space-y-7  sm:px-5 sm:py-5 sm:w-full">
                            <div className={`w-[100px] h-[100px] rounded-full absolute top-[-65px] p-[1px] flex justify-center items-center ${!!testContent[currentAnswer] ? isCurrentTrue ? 'button-gradient' : 'test-gradient-wrapper-err' : 'button-gradient'} `}>            
                                <div className="flex items-center justify-center w-full h-full bg-[#14191B] rounded-full">
                                   {renderIcon()}
                                </div>
                            </div>
                            <span className="text-2xl font-bold text-center font-montserrat ">{currentTitle}</span>
                            <div className="flex flex-col items-start space-y-4 ">
                                {questions.map((item, itemIndex) => {
                                    const isTrue = questions[itemIndex]?.isTrue;
                                    const isChecked = itemIndex === currentAnswer || questions[itemIndex]?.isTrue && currentAnswer !== null;
                                   
                                    return (
                                        <div onClick={() => setCurrentAnswer(itemIndex)} className={`flex items-center justify-center space-x-5 ${isChecked ? isTrue ? 'test-gradient-suc' : 'test-gradient-err' : 'opacity-50'}`}>
                                            <input checked={isChecked} type="radio" id={`input-${title}-${itemIndex}`} className="rounded-full border border-1 border-white p-2" />
                                            <label for={`input-${title}-${itemIndex}`}>{item?.title}</label>
                                        </div>
                                    )
                                })}
                            </div>
                            {currentQuestionList +1 < maxQuestionsList ? (
                                 <div className={`p-[1px] flex justify-center items-center rounded-[10px] button-gradient`}>
                                    <button onClick={() => nextList()} className="cryptoMain-card-bg rounded-[10px] px-6 py-1.5 flex items-center justify-center space-x-3 sm:w-full">
                                        <span className="font-montserrat">
                                            Next
                                        </span>    
                                    </button>
                                </div>
                            ) : (
                                <button className="button-gradient rounded-[10px] px-6 py-1.5 flex items-center justify-center space-x-3 sm:w-full">
                                    <span className="font-montserrat">
                                        Done
                                    </span>    
                                </button>
                            )}
                        </div>
                    </div>
                    {currentQuestionList < 2 && (
                        <div className={`opacity-50 h-[200px] w-full max-w-[500px] button-gradient p-[1px] flex justify-center items-center absolute bottom-[-30px] z-[-10] rounded-[30px] ${!!testContent[currentAnswer] ? isCurrentTrue ? 'button-gradient' : 'test-gradient-wrapper-err' : 'button-gradient'}`}> 
                            <div className="w-full h-full rounded-[30px]  px-20 bg-[#14191B]"></div>
                        </div>
                    )}
                    {currentQuestionList < 1 && (
                        <div className={`opacity-20 h-[200px] w-full max-w-[450px] button-gradient p-[1px] flex justify-center items-center absolute bottom-[-60px] z-[-15] rounded-[30px] ${!!testContent[currentAnswer] ? isCurrentTrue ? 'button-gradient' : 'test-gradient-wrapper-err' : 'button-gradient'}`}> 
                            <div className="w-full h-full rounded-[30px]  px-20 bg-[#14191B]"></div>
                        </div>
                     )}
                </div>
                <img className="absolute w-[55vh] top-0 right-0 z-[-20] sm:hidden" src={backgroundList?.right} />
            </div>
        </div>
  )
}