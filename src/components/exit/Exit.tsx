import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { QuizContext } from '../../context/QuizContext'

import './Exit.css'

const Exit = () => {
  const { isQuizSubmitted } = useContext(QuizContext)

  if (!isQuizSubmitted) {
    return <Navigate to='/' />
  } else {
    return (
      <div className='exit-msg'>
        <h2>Thank You for taking the Quiz!</h2>
        <h3>See you soon!!</h3>
      </div>
    )
  }
}

export default Exit
