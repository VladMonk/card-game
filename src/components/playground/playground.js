import ReactDOM from 'react-dom'
import React from 'react'
import './playground.css'
import Card from '../card/card'
import Header from '../header/header'
import MainMenu from '../main-menu/main-menu'

let namesArray = ['_of_hearts.png', '_of_spades.png']
let valueArray = ['jack', 'queen', 'king', 'ace']
let secValueArray = [2,3,4,5,6,7,8,9,10]

function fillArray(arr) {
  let imgArray = []

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < namesArray.length; j++) {
      imgArray.push(
        {
          value: arr[i].toString(),
          url: '/png/' + arr[i] + '/' + arr[i] + namesArray[j]
        }
      )
    }
  }
  return imgArray
}

function shuffle(arr, dif) {
  let pairArr = arr.splice(0, dif)
  for (let i = pairArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [pairArr[i], pairArr[j]] = [pairArr[j], pairArr[i]];
  }
  return pairArr;
}






function FillCardCollection(props) {
  localStorage.num = props.num
  let imgArray = fillArray(secValueArray).concat(fillArray(valueArray));
  imgArray.push(
    {
      value: 'joker',
      url: '/png/joker/black_joker.png'
    },
    {
      value: 'joker',
      url: '/png/joker/red_joker.png'
    }
  )
  imgArray = shuffle(imgArray, props.num)
  let cardArray = []

  for (let i = 0; i < props.num; i++) {
    cardArray.push(<Card card = {imgArray[i]}/>)
  }

  let rowArr = []
  let cellArr = []

  let i = 0
  let j = 0
  const n = props.n

  while (i < props.num) {

    let cell = <td key={i+1}> {cardArray[i]} </td>
    cellArr.push(cell)

    i++
    j++

    if(j === Number(n)) {
      rowArr.push(<tr key = {'0' + i}>{cellArr}</tr>)
      cellArr = []
      j = 0
    }

  }
  return rowArr
}

class Playground extends React.Component {
  constructor(props){
    super(props)
    this.goBack = this.goBack.bind(this)
  }

  goBack() {
    localStorage.name = ''
    localStorage.score = 0
    ReactDOM.render(
      <MainMenu />,
      document.querySelector('.App')
    )
  }

  render() {
    console.log(this.props.op.columns);
    return (
      <div>
        <header>
          <Header/>
        </header>
        <table id = 'play-table'>
          <tbody>
            <FillCardCollection num={this.props.op.count} n = {this.props.op.columns}/>
          </tbody>
        </table>
        <div>
          <button onClick = {this.goBack} >Back to menu</button>
        </div>
      </div>
    )
  }
}



export default Playground;
