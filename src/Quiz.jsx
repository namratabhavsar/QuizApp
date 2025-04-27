import { useState } from "react";
import Score from "./Score";

function Quiz()
{
    const questionBank = [
        {
          question: "What is the capital of France?",
          options: ["Berlin", "London", "Paris", "Rome"],
          answer: "Paris",
        },
        {
          question: "Which language is used for web apps?",
          options: ["PHP", "Python", "Javascript", "All"],
          answer: "All",
        },
        {
          question: "Who is the current CEO of Tesla?",
          options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
          answer: "Elon Musk",
        },
      ];

    
      //set the current question
      const[currentQuestionIndex,setCurrentQuestion] = useState(0)

      //const[optionSelected,setOption] = useState("None")

      const[answersSelected , setAnswersSelected] = useState([null,null,null])

      const[isQuizFinished,setIsQuizFinished] = useState(false);
function goToNext()
{
  if (currentQuestionIndex=== questionBank.length-1)
  {
    setIsQuizFinished(true);
  }
  else
  {
    setCurrentQuestion(currentQuestionIndex + 1);

  }
}

function goToPrev()
{
    if(currentQuestionIndex > 0)
    {
        setCurrentQuestion(currentQuestionIndex -1);
    }
}

function handleClick(option)
{
   //setOption(option)
   answersSelected[currentQuestionIndex] = option;
   setAnswersSelected(answersSelected);
}
function restartQuiz(){
 setAnswersSelected([null,null,null]); 
 setCurrentQuestion(0);
 setIsQuizFinished(false);
}

if( isQuizFinished)
{
 return <Score answersSelected = {answersSelected} questionBank={questionBank} restartQuiz={restartQuiz}/>
}
else
{
    return(
      <div>
        <h2>Question 1</h2>
        <div className ="app-container">
            <div className="question">{questionBank[currentQuestionIndex].question}</div>
            <div>
                {questionBank[currentQuestionIndex].options.map((option,index)=>(
                    <button key={option} className="option" onClick={()=>handleClick(option)}>{option}</button>
                ))}
            </div>
            <div className="nav-buttons">
                <button onClick={goToPrev}>Previous</button>
                <button onClick={goToNext}>
                    {currentQuestionIndex=== questionBank.length-1 ? "Finish":"Next"}
                </button>
            </div>
        </div>
      </div>
    )
}
}
export default Quiz