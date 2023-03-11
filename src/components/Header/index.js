import {useHistory} from 'react-router-dom'
import './index.css'

const Header = () => {
  const history = useHistory()

  function handleClick() {
    history.replace('/')
    window.location.reload()
  }

  return (
    <div className="HeaderCls">
      <h2>You tell, I do</h2>
      <button type="button" className="Logout" onClick={handleClick}>
        Logout
      </button>
    </div>
  )
}

export default Header
