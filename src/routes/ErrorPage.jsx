import { Link, useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError()

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <Link to="/">&larr; Go back</Link>
    </div>
  )
}

export default ErrorPage
