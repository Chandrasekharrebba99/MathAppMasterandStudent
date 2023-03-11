import {useHistory} from 'react-router-dom'
import './index.css'

const NotFound = () => {
  const history = useHistory()
  function handleClick() {
    history.replace('/login')
    window.location.reload()
  }

  return (
    <div className="NotFoundCont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="Not Found"
        className="notFound"
      />
      <h1>Page Not Found</h1>
      <p>We are sorry, the page you requested could not be found</p>
      <button type="button" onClick={handleClick} className="Logout">
        Retry Login Page
      </button>
    </div>
  )
}

export default NotFound
