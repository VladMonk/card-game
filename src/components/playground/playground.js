function fillTable(lLength, cLength, table) {
  for (let i = 1; i < lLength; i++) {
    let line = document.createElement('tr')
    for (let j = 1; j < cLength; j++) {
      let cell = document.createElement('td')
      cell.value = (cLength * i) + j
      line.append(cell)
    }
    table.append(line)
  }
  return table
}


function Playground(props){

  let table = document.createElement('table')

  switch (props.difficult) {
    case 20:
      table = fillTable(4, 5, table)
      break;
    case 24:
      table = fillTable(6, 4, table)
      break;
    case 30:
      table = fillTable(6, 5, table)
      break;
  }

  return (
    <div>
      {Object.toString(table)}
    </div>
  )
}

export default Playground;
