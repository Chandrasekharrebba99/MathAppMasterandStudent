import {Component} from 'react'
import {gsap} from 'gsap'
import Header from '../Header'
import Footer from '../Footer'
import StudentQuestions from '../StudentQs'
import './index.css'

function zero(operation) {
  return operation ? operation(0) : 0
}
function one(operation) {
  return operation ? operation(1) : 1
}
function two(operation) {
  return operation ? operation(2) : 2
}
function three(operation) {
  return operation ? operation(3) : 3
}
function four(operation) {
  return operation ? operation(4) : 4
}
function five(operation) {
  return operation ? operation(5) : 5
}
function six(operation) {
  return operation ? operation(6) : 6
}
function seven(operation) {
  return operation ? operation(7) : 7
}
function eight(operation) {
  return operation ? operation(8) : 8
}
function nine(operation) {
  return operation ? operation(9) : 9
}

const plus = left => right => left + right
const minus = left => right => left - right

const times = left => right => left * right

const dividedBy = left => right => Math.floor(left / right)

const nums = {
  0: zero,
  1: one,
  2: two,
  3: three,
  4: four,
  5: five,
  6: six,
  7: seven,
  8: eight,
  9: nine,
}

function parseExpr(expr) {
  const tokens = expr.split(' ')
  const num1 = nums[tokens[0]]
  const opStr = tokens[1]

  let opFn
  switch (opStr) {
    case 'plus':
      opFn = plus
      break
    case 'minus':
      opFn = minus
      break
    case 'times':
      opFn = times
      break
    case 'divided_by':
      opFn = dividedBy
      break
    default:
      return 0
  }
  const num2 = nums[tokens[2]]
  return num1(opFn(num2()))
}

console.log(parseExpr('8 plus 3'), 'test log') // Output: 12

const ListOfAllQuestion = localStorage.getItem('myQuestions')
const Questions = JSON.parse(ListOfAllQuestion)

class Student extends Component {
  state = {QuestionsList: Questions, TotalCorrect1: 0, TotalQs: 0}

  componentDidMount() {
    this.animationSidenav()
  }

  animationSidenav = () => {
    gsap.from('.MasterCont', {duration: 1, x: -500})
    gsap.to('.MasterCont', {duration: 1, x: 0})
  }

  onSubmitAns = () => {
    const {QuestionsList} = this.state
    let Correct = 0
    let TotalQs1 = 0
    const newData = QuestionsList.map(obj => {
      const el = document.getElementById(obj.id)
      const ans = el.value
      console.log(obj.Question)

      const QuestionName = parseExpr(obj.Question)
      const status = Number(ans) === Number(QuestionName) ? 'correct' : 'wrong'
      if (status === 'correct') {
        Correct += 1
      }
      TotalQs1 += 1

      return {...obj, Answer: ans, currectAns: QuestionName, Status: status}
    })
    localStorage.setItem('TotalMarks', Correct)
    this.setState({
      QuestionsList: newData,
      TotalCorrect1: Correct,
      TotalQs: TotalQs1,
    })

    console.log(newData)
  }

  render() {
    const {QuestionsList, TotalCorrect1, TotalQs} = this.state
    const MasterName = localStorage.getItem('MasterName')
    console.log(TotalCorrect1)

    return (
      <div className="">
        <Header />
        <div className="StudentView">
          <div className="MasterCont">
            <h3>Exam conducted by {MasterName}</h3>
            <img
              className="ImageMAster"
              alt="Dv"
              src="https://ik.imagekit.io/xycwnyusl/pngwing.com__1_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678362332429"
            />
            <h4>More Math More Fun +-/*</h4>
          </div>
          <div className="QuestionConttop">
            <h1>Exam Sheet</h1>
            <div className="QuestionCont">
              <h1>Answer All the Questions</h1>
              {QuestionsList.map(Arr => (
                <StudentQuestions Arr={Arr} key={Arr.ids} />
              ))}
            </div>
            <div className="MarksCont">
              <button
                type="button"
                className="w3-button w3-blue"
                onClick={this.onSubmitAns}
              >
                Submit
              </button>
              <h1>
                Total Marks:
                {TotalCorrect1 !== 0 && `${TotalCorrect1} / ${TotalQs}`}
              </h1>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Student
