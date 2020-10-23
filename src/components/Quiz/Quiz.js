import React, {Component, Fragment} from 'react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Levels from './../Levels/Levels';
import ProgressBar from './../ProgressBar/ProgressBar';
import QuizQuestions from './../QuizQuestions/QuizQuestions';
import QuizOver from './../QuizOver/QuizOver';
toast.configure();

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
        score: 0,
        welcomMsg: false,
        quizEnd: false
    }
    
     storedDataRef = React.createRef();

    // Here we've got our answer on CDM i.e Débutant and we pass it as level
    loadQuestions = level => {
        const {maxQuestions} = this.state
        const fechedArrayQuiz =  QuizQuestions[0].quizz[level]
            if (fechedArrayQuiz.length >= maxQuestions -1) {
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
        const {maxQuestions, idQuestion, userAnswer} = this.state

        if (idQuestion === maxQuestions -1) {
            this.gameOver();
        } else {
            this.setState(prevState => ({
                idQuestion: prevState.idQuestion + 1
            }))
        }
        // Incrémentation du score 
        const goodAnswer = this.storedDataRef.current[idQuestion].answer
        if (userAnswer === goodAnswer) {
            this.setState(prevState => ({
                score: prevState.score +1
            }))
            toast.success(`Bonne réponse ! 🦄`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                bodyClassName: 'toastfy-color'
                });
        } else {
            toast.error(`Mauvaise réponse 🦄`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                bodyClassName: 'toastfy-color'
                });
        }
    }
    welcomPseudo = pseudo =>{
        const {welcomMsg} = this.state
        if (!welcomMsg) {
            this.setState({
                welcomMsg: true
            })
            toast. warn(`Bienvenue ${pseudo} 🦄 `, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        
    }

    componentDidMount() {
        const {levelsNames, quizLevel} = this.state
        // here we've got levelsNames[0] which is Débutant like on the state
        this.loadQuestions(levelsNames[quizLevel]);
    }

    componentDidUpdate(prevProps, prevState) {
        const {storedQuestions, idQuestion} = this.state
        if (storedQuestions !== prevState.storedQuestions) {
            this.setState({
                question: storedQuestions[idQuestion].question,
                options: storedQuestions[idQuestion].options
            })
        }
        if (idQuestion !== prevState.idQuestion) {
            this.setState({
                question: storedQuestions[idQuestion].question,
                options: storedQuestions[idQuestion].options,
                userAnswer: null,
                btnDisabled: true
            })
        }
        if (this.props.userData.pseudo) {
            this.welcomPseudo(this.props.userData.pseudo)
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
    getPercentage  = (maxQues, ourScore) => (ourScore / this.state.maxQuestions) *100

    gameOver = () => {
        const gradePercent = this.getPercentage(this.state.maxQuestions, this.state.score)
        if (gradePercent >= 50) {
            this.setState({
                quizLevel: this.state.quizLevel +1,
                percent: gradePercent,
                quizEnd: true
            })
        } else {
            this.setState({
                percent: gradePercent,
                quizEnd: true
            })
        }
    }

    render() {

        const {options, userAnswer, question, btnDisabled, idQuestion, maxQuestions} = this.state
        
        const optionsDisplay = options.map((option, index) => {
            return(
                // we'll pass the string that we'll get on option in this.submitAnswer(option)
                <p key={index} className={`answerOptions ${userAnswer === option ? "selected" : null}`} onClick={() => this.submitAnswer(option)}>{option}</p>
                )
        })
            return this.state.quizEnd ? (
                <QuizOver 
                ref={this.storedDataRef} 
                levelsNames={this.state.levelsNames}
                score={this.state.score }
                maxQuestions={this.state.maxQuestions}
                quizLevel={this.state.quizLevel}
                percent={this.state.percent}
                />
            ) : (
                <Fragment>
                    <Levels />
                    <ProgressBar idQuestion={idQuestion} maxQuestions={maxQuestions}/>
                    <h2>{question}</h2>
                        { optionsDisplay }
                    <button disabled={btnDisabled} className="btnSubmit" onClick={this.nextQuestion}>
                        {idQuestion < maxQuestions-1 ? "Suivant" : "Terminer"}
                    </button>
                </Fragment>
             );
       
    }
}

export default Quiz;
