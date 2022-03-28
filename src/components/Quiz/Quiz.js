import React, { useState } from "react";
import { Link } from "react-router-dom";

const Quiz = () => {

    const questions = [
        {
            questionText: 'What is Tony Stark’s daughter’s name?',
            answerOptions: [
                { id: 1, answerText: 'Wanda', isCorrect: false },
                { id: 2, answerText: 'Natasha', isCorrect: false },
                { id: 3, answerText: 'Pepper', isCorrect: false },
                { id: 4, answerText: 'Morgan', isCorrect: true },
            ]
        },
        {
            questionText: 'Who is the Winter Soldier?',
            answerOptions: [
                { id: 1, answerText: 'Thor', isCorrect: false },
                { id: 2, answerText: 'Tony', isCorrect: false },
                { id: 3, answerText: 'Bucky', isCorrect: true },
                { id: 4, answerText: 'Steve', isCorrect: false },
            ]
        },
        {
            questionText: 'Who is the firstborn child of Odin?',
            answerOptions: [
                { id: 1, answerText: 'Hela', isCorrect: true },
                { id: 2, answerText: 'Thor', isCorrect: false },
                { id: 3, answerText: 'Hulk', isCorrect: false },
                { id: 4, answerText: 'Loki', isCorrect: false },
            ]
        },
        {
            questionText: 'Captain America’s shield and Bucky’s arm are made of what?',
            answerOptions: [
                { id: 1, answerText: 'Silver', isCorrect: false },
                { id: 2, answerText: 'Gold', isCorrect: false },
                { id: 3, answerText: 'Iron', isCorrect: false },
                { id: 4, answerText: 'Vibranium', isCorrect: true },
            ]
        },
    ]

    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [showScores, setShowScores] = useState(false);

    const handleAnswerClick = (isCorrect) => {
        isCorrect && setScore(score + 1);

        const nextQuestion = current + 1;
        if (nextQuestion < questions.length) {
            setCurrent(nextQuestion)
        } else {
            setShowScores(true)
        }
    }

    const refresh = () => {
        setCurrent(0);
        setScore(0);
        setShowScores(false);
    }

    return (
        <div className='app-wrapper'>
            <Link className="go-back" to='/'>Go back</Link>
            {
                showScores
                    ? <div className='score-block'>
                        <h2>Right questions: {score} / {questions.length}</h2>
                        <button onClick={refresh}>One more Time?</button>
                    </div>
                    : <div className='app-block'>
                        <div className='question-block'>
                            <h3>Question {current + 1} / {questions.length}</h3>
                            <p>{questions[current].questionText}</p>
                        </div>
                        <div className='answer-block'>

                            {
                                questions[current].answerOptions.map(answer => {
                                    return (
                                        <div key={answer.id}>
                                            <button onClick={() => handleAnswerClick(answer.isCorrect)}>{answer.answerText}</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
            }

        </div>
    )
}

export default Quiz;