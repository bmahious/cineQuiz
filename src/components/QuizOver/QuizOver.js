import React, { Fragment, useEffect, useState } from 'react'


const QuizOver = React.forwardRef((props, ref) => {
  
    const {levelsNames, score, maxQuestions, quizLevel, percent, loadLevelQuestions} = props 

    const [asked, setAsked] = useState([])
    console.log(asked)
    useEffect(() => {
        setAsked(ref.current)
    }, [ref]);

    

    const averageGrade = maxQuestions / 2;

    if (score < averageGrade) {
        setTimeout(() => loadLevelQuestions(0),3000)
       // setTimeout(() => loadLevelQuestions(quizLevel),3000)
    }
    const decision = score >= averageGrade ? (
        <Fragment>
            <div className="stepsBtnContainer">
                {
                   
                    quizLevel < levelsNames.length ? (
                        
                        <Fragment>
                            <p className="successMsg"> Bravo ! Vous passez au niveau suivant ! </p>
                            <button className="btnResult success" onClick={() => loadLevelQuestions(quizLevel)}>Niveau Suivant</button>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <p className="successMsg"> Bravo vous êtes un expert ! </p>
                            <button className="btnResult success" onClick={() => loadLevelQuestions(0)}>Retour à l'accueil </button>
                            <button className="btnResult gameOver"></button>
                        </Fragment>
                    )
                }
            </div>
            <div className="percentage">
                <div className="progressPercent">Réussite: {percent}%</div>
                <div className="progressPercent">Note: {score}/{maxQuestions}</div>
            </div>
        </Fragment>
    ) : ( 
        <Fragment>
             <div className="stepsBtnContainer">
                <p className="failureMsg"> Vous avez echoué ! </p>
            </div>
            <div className="percentage">
                <div className="progressPercent">Réussite: {percent}</div>
                <div className="progressPercent">Note: {score}/{maxQuestions}</div>
            </div>
        </Fragment>
    )

    const questionAnswer = score > averageGrade ? (
        asked.map( question => {
            return(
                <tr key={question.id}>
                    <td>{question.question}</td>
                    <td>{question.answer}</td>
                    <td> <button className="btnInfo"> Info </button> </td>
                </tr>
            )
        })
    ) : (
        <tr colSpan="3 " >
            <div className="loader"></div>
            <p style={{textAlign: 'center', color: 'red'}}>Pas de réponses </p>
        </tr>
)
    
    return (
        <Fragment>
           
            {decision}
            <hr />
            <p> Les réponses aux questions posées :</p>
            <div className="answerOptions">
                <table className="answers">
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Réponse</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questionAnswer}
                    </tbody>
                </table>
            </div>
        </Fragment>
        
    )
})


export default QuizOver

