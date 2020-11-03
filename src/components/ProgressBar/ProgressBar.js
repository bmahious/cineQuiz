import React, { Fragment } from 'react';
import './ProgressBar.css';

const ProgressBar = ({idQuestion, maxQuestions}) => {

    const getPercent = (totalQuestions, questionId) => {
        return((100 / totalQuestions) * questionId) 
    }
   
    const actualQuestion = idQuestion +1;
    const progressPercent = getPercent(maxQuestions, actualQuestion);
    return (
        <Fragment>
            <div className="percentage">
                <div className="progressPercent">{`Question : ${idQuestion +1}/${maxQuestions}`}</div>
                <div className="progressPercent">{`Progression : ${progressPercent}%`}</div>
            </div>
            <div className="progressBar">
                <div className="progressBarChange" style={{width: `${progressPercent}%`}} ></div>
            </div>
        </Fragment>
        
    )
}

export default React.memo(ProgressBar);


// FOR THE PERCENTAGE WE CAN USE ONLY THIS
  // const getPercent = ((idQuestion +1) * 10);

// OR THIS

// const actualQuestion = idQuestion +1;
// const progressPercent = ((maxQuestions, actualQuestion)*10);