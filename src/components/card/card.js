import './card.css'

localStorage.clear()

function Card(props) {

  function switchClick(cmd, elemArr) {
    switch (cmd) {
      case 'off':
        elemArr.forEach((elem) => {
          elem.classList.add('cant-click')
        });
        break;
      case 'on':
        elemArr.forEach((elem) => {
          elem.classList.remove('cant-click')
        });
        break;
      default:
        break;
    }
  }

  function handleClick(e) {
    let elem = e.target.closest('td').firstElementChild.firstElementChild

    if (!(elem.classList.contains('cant-click'))) {

      elem.classList.add('open')
      let value = props.card.value

      if(localStorage.length === 0) {
        localStorage.setItem(value, elem)
        elem.classList.add('clicked')

      } else if(localStorage.getItem(value)) {

        if (!(elem.classList.contains('clicked'))) {
          let cards = document.querySelectorAll(`[value="${value}"]`)
          cards.forEach((item) => {
            Array.from(item.children).forEach((child) => {
              child.classList.remove('clicked')
              child.classList.add('hide')
            });
          });
          localStorage.clear()
        }

      } else {
        localStorage.clear()
        let prevElem = document.querySelector(`.clicked`)
        switchClick('off', document.querySelectorAll('img'))
        setTimeout(() => {
          switchClick('on', document.querySelectorAll('img'))
          prevElem.classList.remove('open', 'clicked')
          elem.classList.remove('open')
        }, 2000)
      }
    }
  }
  return (
		<div value = {props.card.value} className = 'card-holder' onClick = {handleClick}>
      <img src = {props.card.url} className = 'front'/>
      <img src = '/png/back/back@2x.png' className = 'back' />
		</div>
  )
}


export default Card
