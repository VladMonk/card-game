import './card.css'
import React from 'react'

function Card(props) {
  function handleClick(e) {
    console.log(e.target);
    let elem = e.target.closest('td').firstElementChild.firstElementChild
    elem.classList.toggle('hide')


  }
  return (
		<div className = 'card-holder' onClick = {handleClick}>
      <img src = {props.card.url} className = 'front'/>
      <img src = '/png/back/back@2x.png' className = 'back' />
		</div>
  )
}


export default Card
