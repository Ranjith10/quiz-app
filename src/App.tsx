import { Route, Routes } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import Header from './components/header/Header'
import Quiz from './components/quiz/Quiz'
import Summary from './components/summary/Summary'
import Exit from './components/exit/Exit'
import PageNotFound from './components/common/PageNotFound'
import ErrorFallback from './components/common/ErrorFallback'

import './App.css'

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className='app-container'>
        <Header />
        <Routes>
          <Route path='/' element={<Quiz />} />
          <Route path='summary' element={<Summary />} />
          <Route path='exit' element={<Exit />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </ErrorBoundary>
  )
}

export default App
