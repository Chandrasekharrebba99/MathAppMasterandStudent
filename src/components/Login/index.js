import {Component} from 'react'
import {withRouter} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {isSignUp: true}

  onClickSignUp = () => {
    this.setState(prev => ({isSignUp: !prev.isSignUp}))
  }

  onClickSignInStudent = () => {
    const StudentIdEl = document.getElementById('StduentId')
    const StudentName = StudentIdEl.value
    localStorage.setItem('StudentName', StudentName)
    const {history} = this.props
    history.push('/student')
  }

  onClickSignInMaster = () => {
    const MasterNameID = document.getElementById('MasterNameID')
    const MasterNameValue = MasterNameID.value
    localStorage.setItem('MasterName', MasterNameValue)
    const {history} = this.props
    history.push('/master')
  }

  render() {
    const {isSignUp} = this.state
    console.log(isSignUp)

    const classNameofWindow = 'right-panel-active container'

    return (
      <div className="TopBGLogIN">
        <div
          className={isSignUp ? `${classNameofWindow}` : 'container'}
          id="container"
        >
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Master Sign In</h1>

              <span>Or use your Email for registration</span>
              <label>
                <input type="text" id="MasterNameID" placeholder="Name" />
              </label>

              <button
                className="SignUpBtn w3-button w3-blue"
                type="button"
                onClick={this.onClickSignInMaster}
              >
                Sign In
              </button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Student Sign in</h1>

              <label>
                <input type="text" placeholder="Username" id="StduentId" />
              </label>

              <button
                type="button"
                className="w3-button w3-blue"
                onClick={this.onClickSignInStudent}
              >
                Sign In
              </button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <img
                  src="https://ik.imagekit.io/xycwnyusl/pngwing.com__1_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678362332429"
                  alt="xsd"
                  className="MasterLogo"
                />
                <h3>Student Login Here!</h3>

                <button
                  onClick={this.onClickSignUp}
                  className="ghost mt-5 Loginbutton"
                  type="button"
                  id="signIn"
                >
                  Student Login
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <img
                  src="https://ik.imagekit.io/xycwnyusl/pngwing.com.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678362186478"
                  alt="Dsd"
                  className="MasterLogo"
                />
                <h3>Master Login Here!</h3>

                <button
                  className="ghost Loginbutton"
                  type="button"
                  id="signUp"
                  onClick={this.onClickSignUp}
                >
                  Master LogIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
