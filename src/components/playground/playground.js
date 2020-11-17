import './playground.css'
import Card from '../card/card'

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

function FillCardCollection(props) {

  let cardArray = []

  for (let i = 0; i < props.num; i++) {
    cardArray.push(<Card card = {imgArray[i]}/>)
  }

  let rowArr = []
  let cellArr = []

  let i = 0
  let j = 0
  while (i < props.num) {

    let cell = <td key={i+1}> {cardArray[i]} </td>
    cellArr.push(cell)

    i++
    j++

    if(j === 4) {
      rowArr.push(<tr key = {'0' + i}>{cellArr}</tr>)
      cellArr = []
      j = 0
    }

  }
  return rowArr
}

function Playground(props){
  return (

    <div>
      <table id = 'play-table'>
        <tbody>
          <FillCardCollection num={props.difficult} />
        </tbody>
      </table>
    </div>
  )
}

export default Playground;
