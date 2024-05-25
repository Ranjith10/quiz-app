import { useContext, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { QuizContext } from '../../context/QuizContext'
import Question from './Question'
import QuizAction from './QuizAction'
import ProgressBar from './ProgressBar'
import ErrorFallback from '../common/ErrorFallback'

import './Quiz.css'

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const { answers, quizData } = useContext(QuizContext)

  //ProgressBar - show percentage of quiz completion
  const totalQuestions = quizData.length
  const answeredQuestions = Object.keys(answers).length
  const progressPercent = (answeredQuestions / totalQuestions) * 100

  return (
    <div className='quiz-container'>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Question currentQuestionIndex={currentQuestionIndex} />
        <QuizAction
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          currentQuestionIndex={currentQuestionIndex}
        />
        <ProgressBar progressPercent={progressPercent} />
      </ErrorBoundary>
    </div>
  )
}

export default Quiz
