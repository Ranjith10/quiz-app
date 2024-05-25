import { useNavigate } from 'react-router-dom'

import './PageNotFound.css'

const PageNotFound = () => {
  const navigate = useNavigate()
  const handleHomeNavigation = () => {
    navigate('/')
  }

  return (
    <div className='page-not-found'>
      <h2>404 Page Not Found</h2>
      <button className='go-to-btn' onClick={handleHomeNavigation}>
        Go to Home - Quiz App
      </button>
    </div>
  )
}

export default PageNotFound
