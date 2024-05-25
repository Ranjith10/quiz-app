export type QuizContextProviderProps = {
  children: React.ReactNode
}

export type Option = {
  key: string
  text: string
}

export type Question = {
  id: number
  question: string
  options: Option[]
  answerKey: string
}

export type QuizContextType = {
  quizData: Question[]
  setQuizData: React.Dispatch<React.SetStateAction<Question[]>>
  answers: Answers
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>
  isQuizSubmitted: boolean
  setIsQuizSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}

export type Answers = {
  [key: number]: string
}
