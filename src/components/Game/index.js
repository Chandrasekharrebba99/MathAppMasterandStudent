import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import Questions from '../Questions'
import './index.css'

const ListOfAllQuestions = []

class Game extends Component {
  state = {isPosted: false, Qcount: 1, MasterQuestions: []}

  onClickSave = id => {
    const InputValue1 = document.getElementById(id)
    const valueInput = InputValue1.value
    const {MasterQuestions} = this.state
    const ListToSave = MasterQuestions.map(Arr => {
      if (Arr.id === id) {
        return {...Arr, isSaved: true, Question: valueInput}
      }
      return Arr
    })
    this.setState({MasterQuestions: ListToSave})
  }

  onClickDelete = id => {
    const {MasterQuestions} = this.state
    const DeleteList = MasterQuestions.filter(Arr => Arr.id !== id)
    console.log(DeleteList)

    this.setState({MasterQuestions: DeleteList})
  }

  onClickPost = () => {
    const {MasterQuestions} = this.state
    const ListOfSavedQs = MasterQuestions.filter(Arr => Arr.isSaved)
    console.log(ListOfSavedQs)

    const myListJson = JSON.stringify(ListOfSavedQs)
    localStorage.setItem('myQuestions', myListJson)
    this.setState(prev => ({isPosted: !prev.isPosted}))
  }

  AddQuestion = () => {
    const {Qcount, MasterQuestions} = this.state // Destructure Qcount and MasterQuestions from state
    const Question = {
      id: uuidv4(),
      isSaved: false,
      QuestionNo: Qcount,
      Question: '',
    }
    this.setState({
      MasterQuestions: [...MasterQuestions, Question], // Append new Question object to MasterQuestions array
      Qcount: Qcount + 1, // Increment Qcount by 1
    })
  }

  AddthisQuestion = () => {
    console.log('')
    return (
      <div className="QuestionInnerBox">
        <label htmlFor="textQId">1.</label>
        <input
          type="text"
          className="w3-input w3-border"
          id="textQId"
          placeholder="Enter Your Question"
          onChange={this.onChangeInputQ}
        />
        <button type="button" className="w3-btns" onClick={this.AppendToList}>
          Save
        </button>
      </div>
    )
  }

  render() {
    console.log(ListOfAllQuestions)
    const {MasterQuestions, Qcount, isPosted} = this.state
    console.log(MasterQuestions)

    return (
      <div className="GameTopCont">
        <div>
          <h1>Post Your Questions Here</h1>
        </div>
        <div className="QuestionBox" id="QuestionYoverflow">
          <div className="Question" id="QuestionBoxID">
            {MasterQuestions.map(arr => (
              <Questions
                arr={arr}
                key={arr.id}
                Qcount={Qcount}
                onClickSave={this.onClickSave}
                onChangeInputQ={this.onChangeInputQ}
                onClickDelete={this.onClickDelete}
              />
            ))}
          </div>
          <button
            type="button"
            className="w3-button w3-circle w3-black"
            onClick={this.AddQuestion}
          >
            +
          </button>
        </div>

        <div>
          <button
            className="w3-button w3-blue"
            type="button"
            onClick={this.onClickPost}
          >
            {isPosted ? 'Successfully Posted' : 'Post'}
          </button>
        </div>
      </div>
    )
  }
}

export default Game
