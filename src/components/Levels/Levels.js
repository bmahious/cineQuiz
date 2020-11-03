import React, {useEffect, useState} from 'react';
import Stepper from 'react-stepper-horizontal';
import './Levels.css';

const Levels = ({levelsNames, quizLevel}) => {

    const [levets, setLevets] = useState([])

    useEffect(() => {
       const quizSteps = levelsNames.map(level => ({title: level.toUpperCase()}));
       setLevets(quizSteps)
    }, [levelsNames])

    return (
        <div className="levelsContainer">
                 <Stepper
                   steps={levets} 
                   activeStep={quizLevel} 
                   activeTitleColor={'#d31017'}
                   activeColor={'#d31017'}
                   completedTitleColor={'#E0E0E0'}
                   completeColor={'#E0E0E0'}
                   completeBarColor={'#E0E0E0'} 
                   barStyle={'dashed'}
                   size={55}
                   circleFontSize={20}
                 />
        </div>
    )
}

export default React.memo(Levels);

