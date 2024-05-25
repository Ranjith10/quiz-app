import { createContext, useState } from 'react'

import {
  Question,
  QuizContextProviderProps,
  QuizContextType,
  Answers,
} from './QuizContextTypes'

import data from '../data/data.json'

export const QuizContext = createContext({} as QuizContextType)

const QuizContextProvider = ({ children }: QuizContextProviderProps) => {
  const [quizData, setQuizData] = useState<Question[]>(data)
  const [answers, setAnswers] = useState<Answers>({})
  const [isQuizSubmitted, setIsQuizSubmitted] = useState<boolean>(false)

  const value = {
    quizData,
    setQuizData,
    answers,
    setAnswers,
    isQuizSubmitted,
    setIsQuizSubmitted,
  }

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}

export default QuizContextProvider
