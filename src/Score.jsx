function Score({questionBank,answersSelected,restartQuiz})
{

 let score = 0;
 answersSelected.map((answer,index)=>{
    if(answer==questionBank[index].answer)
    {
        score++;
    }
    
 })

    return (
        <div className="app-container">
            <h2>Quiz Completed !</h2>
            <p>Your Score : {score}/3</p>
            <button className="restart-button" onClick={restartQuiz}>Restart</button>
        </div>
    )


}
export default Score