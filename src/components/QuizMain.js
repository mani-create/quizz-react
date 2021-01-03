import React, { Component } from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';
import { Redirect } from "react-router-dom";


export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: "India is a federal union comprising twenty-nine states and how many union territories?",
            2: "Which of the following is the capital of Arunachal Pradesh?",
            3: "Which of the following states is not located in the North?",
            4: "In which state is the main language Khasi?",
            5: "In what state is the Elephant Falls located?",
        },
        answers: {
            1: {
                1: "6",
                2: "7",
                3: "8",
            },
            2: {
                1: "Itanagar",
                2: "Dispur",
                3: "Imphal",
            },
            3: {
                1: "Jharkhand",
                2: "Jammu and Kashmir",
                3: "Himachal Pradesh",
            },
            4: {
                1: "Mizoram",
                2: "Nagaland",
                3: "Meghalaya",
            },
            5: {
                1: "Mizoram",
                2: "Meghalaya",
                3: "Manipur",
            },
        },
        correctAnswers: {
            1: "2",
            2: "1",
            3: "1",
            4: "3",
            5: "2",
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0,
        redirect: false
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if (answer === correctAnswers[step]) {
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        } else {
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render() {
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score, redirect } = this.state;
        return (
            <div className="Content">
                {step <= Object.keys(quiestions).length ?
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                            className="NextStep"
                            disabled={
                                clickedAnswer && Object.keys(quiestions).length >= step
                                    ? false : true
                            }
                            onClick={() => this.nextStep(step)}>Next</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>You have completed the quiz!</h1>
                            <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
                            <p>Thank you!</p>
                            <button onClick={() => {
                                this.setState({
                                    redirect: true
                                });
                            }
                            }>Back to HomePage</button>
                            {redirect ? <Redirect to="/" /> : null}
                        </div>
                    )
                }
            </div>
        );
    }
}