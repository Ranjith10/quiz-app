export type Answers = {
  [key: number]: string
}

export type QuestionProps = {
  currentQuestionIndex: number
}
  
export type QuizActionProps = {
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>
  currentQuestionIndex: number
}
