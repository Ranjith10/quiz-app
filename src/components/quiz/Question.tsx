import { ChangeEvent, useContext } from 'react'

import { QuizContext } from '../../context/QuizContext'
import { QuestionProps } from './QuizTypes'

import './Question.css'

const Question = ({ currentQuestionIndex }: QuestionProps) => {
  const { answers, setAnswers, quizData } = useContext(QuizContext)

  const { id, options, question } = quizData[currentQuestionIndex]

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswers((prev) => {
      return {
        ...prev,
        [id]: e.target.value,
      }
    })
  }

  return (
    <div className='question-container'>
      <h2 className='question'>{`${id}. ${question}`}</h2>
      {options.map((option) => {
        return (
          <div key={option.key} className='answer-option'>
            <input
              className='option'
              id={`answer-option-${option.key}`}
              name={'answer'}
              value={option.key}
              type='radio'
              checked={option.key === answers[id]}
              onChange={handleChange}
            />
            <label htmlFor={`answer-option-${option.key}`}>
              {`${option.text}`}
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default Question
