import './index.css'

const StudentQuestions = props => {
  const {Arr} = props
  console.log(Arr)

  const {id, Question, QuestionNo, Status, currectAns} = Arr

  return (
    <div className="AnsCont">
      <p>Q.No:{QuestionNo}</p>
      <div className="QuestionData">
        <h5>{Question}</h5>
      </div>
      <p>Ans:{currectAns}</p>
      <input className="AnsInput" type="text" id={id} />
      <div className="StatusCont">
        <p className="StatusEl">Status:</p>
        <span className={Status}>{Status}</span>
      </div>
    </div>
  )
}

export default StudentQuestions
