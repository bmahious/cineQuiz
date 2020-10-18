import React, {Component} from 'react';
import Levels from './../Levels/Levels';
import ProgressBar from './../ProgressBar/ProgressBar';
import QuizQuestions from './../QuizQuestions/QuizQuestions';

class Quiz extends Component {

    state = {
        levelsNames : ['debutant', 'confirme','expert'],
        quizLevel: 0,
        maxQuestions: 10,
        storedQuestions: [],
        question: null,
        options: [],
        idQuestion: 0,
        btnDisabled: true,
        userAnswer: null,
        score: 0
    }

     storedDataRef = React.createRef();

    // Here we've got our answer on CDM i.e Débutant and we pass it as level
    loadQuestions = level => {
        const fechedArrayQuiz =  QuizQuestions[0].quizz[level]
            if (fechedArrayQuiz.length >= this.state.maxQuestions) {

                this.storedDataRef.current = fechedArrayQuiz;
                // Here we isolate the answer and keep the rest i.e question & options ... except the answer so we'll not expose the answer 
                const newArray = fechedArrayQuiz.map(({answer, ...keepRest}) => keepRest)
                this.setState({
                    storedQuestions: newArray
                })
            }else {
                console.log('pas assez de questions !!!')
            }
    }

    nextQuestion = () => {
        if (this.state.idQuestion === this.state.maxQuestions) {
            // End
        } else {
            this.setState(prevState => ({
                idQuestion: prevState.idQuestion + 1
            }))
        }
        // Incrémentation du score 
        const goodAnswer = this.storedDataRef.current[this.state.idQuestion].answer
        if (this.state.userAnswer === goodAnswer) {
            this.setState(prevState => ({
                score: prevState.score +1
            }))
        }
    }

    componentDidMount() {
        // here we've got levelsNames[0] which is Débutant like on the state
        this.loadQuestions(this.state.levelsNames[this.state.quizLevel]);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.storedQuestions !== prevState.storedQuestions) {
            
            this.setState({
                question: this.state.storedQuestions[this.state.idQuestion].question,
                options: this.state.storedQuestions[this.state.idQuestion].options,
                userAnswer: null,
                btnDisabled: true
            })
        }
        if (this.state.idQuestion !== prevState.idQuestion) {
            this.setState({
                question: this.state.storedQuestions[this.state.idQuestion].question,
                options: this.state.storedQuestions[this.state.idQuestion].options,

            })
        }
    }
    
    // we'll get the response when we click on submit because of that we've passed as a function
    submitAnswer = selectedAnswer => {
         this.setState({
             // we'll set the state by the value that we recovered which is selectedAnswer
            userAnswer: selectedAnswer,
            btnDisabled: false
         })
    }

    render() {
        // const { pseudo } = this.props.userData
        const optionsDisplay = this.state.options.map((option, index) => {
            return(
                // we'll pass the string that we'll get on option in this.submitAnswer(option)
                <p key={index} className={`answerOptions ${this.state.userAnswer === option ? "selected" : null}`} onClick={() => this.submitAnswer(option)}>{option}</p>
                )
        })
        return(
            <div>
            {/* <h1> Bonjour {pseudo}  </h1> */}
            <Levels />
            <ProgressBar />
            <h2>{this.state.question}</h2>
                { optionsDisplay }
            <button disabled={this.state.btnDisabled} className="btnSubmit" onClick={this.nextQuestion}>Suivant</button>
        </div>
        )
    }
}

export default Quiz
