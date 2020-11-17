import './card.css'
import React from 'react'

localStorage.clear()

function Card(props) {
  function handleClick(e) {
    let elem = e.target.closest('td').firstElementChild.firstElementChild
    elem.classList.add('open')




    let id = props.card.value

    if(localStorage.length === 0) {
      localStorage.setItem(id, props.card.url)
      elem.classList.add('clicked')

    } else if(localStorage.getItem(id)) {
      alert('ura pobeda');
      localStorage.clear()

      let cards = document.querySelectorAll(`[value="${id}"]`)
      cards.forEach((item) => {
        item.classList.add('hide')
      });



    } else {
      localStorage.clear()
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
