import './ErrorFallback.css'

const ErrorFallback = ({ error }: { error: Error }) => {
  return (
    <div className='error-fallback'>
      <h2>Something went wrong.</h2>
      <h3>{error.message}</h3>
      <h3>Please retry after sometime. Thanks for understanding.</h3>
    </div>
  )
}

export default ErrorFallback
