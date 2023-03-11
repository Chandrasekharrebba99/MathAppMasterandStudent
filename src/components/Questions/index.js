import {AiFillDelete} from 'react-icons/ai'
import './index.css'

const Questions = props => {
  const {arr, onClickSave, onClickDelete} = props
  const {QuestionNo, isSaved, id} = arr
  const SaveOption = () => {
    onClickSave(id)
  }
  const onClickDeleteon = () => {
    onClickDelete(id)
  }

  return (
    <div className="QuestionInnerBox">
      <label htmlFor="textQId">Q.no: {QuestionNo}</label>
      <input
        type="text"
        className="w3-input w3-border"
        id={id}
        placeholder="Enter Your Question"
      />
      <button type="button" className="w3-btns" onClick={SaveOption}>
        {isSaved ? 'Saved' : 'Save'}
      </button>
      <button type="button" className="btnDelete" onClick={onClickDeleteon}>
        <AiFillDelete className="Deleteicon" />
      </button>
    </div>
  )
}

export default Questions
