import './main-menu.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Playground from '../playground/playground'


let options = {
  count: 20,
  columns: 5
}
localStorage.name = ''

function startGame(e) {
  ReactDOM.render(
    <Playground op = {options}/>,
    document.querySelector('.App')
  )
}
function Button() {
  return (
    <button onClick = {startGame}>Start</button>

  )
}

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.nameInput = this.nameInput.bind(this)
  }

  nameInput(e) {
    localStorage.name = e.target.value
    if (localStorage.name) {
      ReactDOM.render(
        <Button />,
        document.querySelector('.button-placeholder')
      )
    }
  }

  diffInput(e) {
    let values = e.target.value.split(',')
    options = {
      count: Number(values[0]),
      columns: Number(values[1])
    }
  }




  render() {
    return (
      <div className = 'menu'>
        <div>
          <label>
            <input type = "email" onBlur = {this.nameInput} />
          </label>
        </div>
        <div>
          <select onChange = {this.diffInput}>
            <option value = {[20,5]}> Easy </option>
            <option value = {[24,6]}> Easy, but more cards </option>
            <option value = {[28,7]}> Still easy </option>
          </select>
        </div>
        <div className = 'button-placeholder'></div>
      </div>
    )
  }
}

export default MainMenu;
