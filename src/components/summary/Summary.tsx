import { Navigate, useNavigate } from 'react-router-dom'
import { Circle } from 'rc-progress'
import { useContext } from 'react'

import { QuizContext } from '../../context/QuizContext'
import { AnswerProps } from './SummaryTypes'

import './Summary.css'

const SummaryItem = ({ answer }: AnswerProps) => {
  const isAnswerCorrect = answer.isAnswerCorrect ? 'Correct' : 'Wrong'
  return (
    <div className={`results-summary-item ${isAnswerCorrect}`}>
      {`${answer.questionId} - ${isAnswerCorrect}`}
    </div>
  )
}

const Summary = () => {
  const navigate = useNavigate()

  const { answers, quizData, isQuizSubmitted, setAnswers, setIsQuizSubmitted } =
    useContext(QuizContext)

  const answersMapped = quizData.map((question) => {
    return {
      questionId: question.id,
      isAnswerCorrect: question.answerKey === answers[question.id],
    }
  })

  const numberOfCorrectAnswers = answersMapped.filter(
    (answer) => answer.isAnswerCorrect,
  ).length

  const correctAnswersPercent = (numberOfCorrectAnswers / quizData.length) * 100

  const handleRestart = () => {
    setAnswers({})
    setIsQuizSubmitted(false)
    navigate('/', { replace: true })
  }

  const handleExit = () => {
    setAnswers({})
    navigate('/exit', { replace: true })
  }

  if (!isQuizSubmitted) {
    return <Navigate to='/' />
  } else {
    return (
      <div className='summary-container'>
        <h2 className='summary-title'>Results Summary</h2>
        <div className='summary-description'>
          <p className='results-description'>{`You got ${numberOfCorrectAnswers} out of ${quizData.length} correctly`}</p>
          <Circle
            percent={correctAnswersPercent}
            strokeWidth={10}
            trailWidth={10}
            gapDegree={15}
            gapPosition='top'
            className='circle-progress'
            strokeColor='#5cb85c'
            trailColor={'#D32F2F'}
          />
        </div>
        <div className='results-summary-container'>
          {answersMapped.map((answer) => {
            return <SummaryItem answer={answer} key={answer.questionId} />
          })}
        </div>
        <div className='results-action-container'>
          <button onClick={handleRestart}>Restart the Quiz</button>
          <button onClick={handleExit}>Exit the App</button>
        </div>
      </div>
    )
  }
}

export default Summary
