import './playground.css'

function FillCardCollection(props) {

  let rowArr = []
  let cellArr = []

  let i = 0
  let j = 0
  while (i < props.num) {

    let cell = <td key={i+1}>  </td>
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
