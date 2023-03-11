import {Component} from 'react'
import Game from '../Game'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

class Master extends Component {
  state = {}

  render() {
    const totalMarks = localStorage.getItem('TotalMarks')
    const StudentName = localStorage.getItem('StudentName')
    return (
      <div>
        <Header />
        <div className="MAsterBody">
          <div className="MasterCont">
            <h1 className="PaddingMaster">Master View</h1>

            <img
              className="ImageMAster"
              alt="Dv"
              src="https://ik.imagekit.io/xycwnyusl/pngwing.com.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678362186478"
            />
            <h3>
              Previous student name {StudentName} Total Marks:{totalMarks}
            </h3>
          </div>
          <div className="GameContLeft">
            <Game />
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Master
