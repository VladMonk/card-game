function fillTable(lLength, cLength, table) {
  for (let i = 0; i < lLength; i++) {
    let line = document.createElement('tr')
    for (let j = 0; j < cLength; j++) {
      let cell = document.createElement('td')
      cell.innerText = ((cLength) * i) + j + 1
      line.append(cell)
    }
    table.append(line)
  }
  return table
}


function Playground(props){

  let table = document.createElement('table')

  switch (props.difficult) {
    case '20':
      table = fillTable(4, 5, table)
      break;
    case '24':
      table = fillTable(6, 4, table)
      break;
    case '30':
      table = fillTable(6, 5, table)
      break;
  }

  console.log(table);

 document.body.append(table)

  return (
    <div>
      {Object.toString(table)}
    </div>
  )
}

export default Playground;
