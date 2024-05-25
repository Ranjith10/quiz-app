import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

import { QuizContext } from '../../context/QuizContext'
import { QuizActionProps } from './QuizTypes'

import './QuizAction.css'

const QuizAction = ({
  setCurrentQuestionIndex,
  currentQuestionIndex,
}: QuizActionProps) => {
  const { answers, quizData, setIsQuizSubmitted } = useContext(QuizContext)

  const navigate = useNavigate()

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prev) => prev - 1)
  }

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1)
  }

  const handleSubmit = () => {
    setIsQuizSubmitted(true)
    navigate('/summary', { replace: true })
  }

  const totalQuestions = quizData.length
  const questionsAnswered = Object.keys(answers).length
  const disableSubmitButton = questionsAnswered !== totalQuestions

  return (
    <>
      <div className='action-container'>
        <div className='questions-info'>
          {`${currentQuestionIndex + 1} of ${totalQuestions} Questions`}
        </div>
        <div className='btn-container'>
          <button
            disabled={currentQuestionIndex === totalQuestions - 1}
            onClick={handleNextQuestion}
          >
            Next
          </button>
          <button
            disabled={currentQuestionIndex === 0}
            onClick={handlePreviousQuestion}
          >
            Previous
          </button>
        </div>
      </div>
      <div className='submit-btn-container'>
        <button disabled={disableSubmitButton} onClick={handleSubmit}>
          Submit
        </button>
        <p>{`*Answer all questions to submit | ${questionsAnswered} of ${totalQuestions} questions answered.`}</p>
      </div>
    </>
  )
}

export default QuizAction
