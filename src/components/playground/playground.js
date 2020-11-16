function fillTable(lLength, cLength) {
  let table = document.createElement('table')
  for (let i = 0; i < lLength; i++) {
    let line = document.createElement('tr')
    for (let j = 0; j < cLength; j++) {
      let cell = document.createElement('td')
      cell.innerText = ((cLength) * i) + j + 1
      cell.setAttribute('id', cell.innerText)
      line.append(cell)
    }
    table.append(line)
  }
  return table
}


function Playground(props){

  let table = null;

  switch (props.difficult) {
    case '20':
      table = fillTable(4, 5)
      break;
    case '24':
      table = fillTable(6, 4)
      break;
    case '30':
      table = fillTable(6, 5)
      break;
  }

  setTimeout(() => {
    let div = document.getElementById('play-table')
    div.insertAdjacentHTML('afterbegin', table.outerHTML)
  }, 0)

  return (
    <div id = 'play-table'>

    </div>
  )
}

export default Playground;
