import './card.css'
import Score from '../display-score/display-score'
import MainMenu from '../main-menu/main-menu'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

localStorage.pair = 0
localStorage.item = 'empty'
localStorage.score = 0

function updateScore() {
  ReactDOM.render(
    <Score score = {localStorage.score} />,
    document.getElementById('score')
  )
}

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


class Card extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    let elem = e.target.closest('td').firstElementChild.firstElementChild

    if (!(elem.classList.contains('cant-click'))) {

      elem.classList.add('open')
      let value = this.props.card.value

      if(localStorage.item === 'empty') {
        localStorage.item = value
        elem.classList.add('clicked')

      } else if(localStorage.item === value) {
        if (!(elem.classList.contains('clicked'))) {
          let cards = document.querySelectorAll(`[value="${value}"]`)
          cards.forEach((item) => {
            Array.from(item.children).forEach((child) => {
              child.classList.remove('clicked')
              child.classList.add('hide')
            });
          });
          localStorage.item = 'empty'
          localStorage.score = Number(localStorage.score) + 1
          localStorage.pair = Number(localStorage.pair) + 1
          if(Number(localStorage.pair) === Number(localStorage.num)/2){
            alert(`Congratulations, ${localStorage.name}, u won with ${localStorage.score} steps`)
            ReactDOM.render(
              <MainMenu />,
              document.querySelector('.App')
            )
          }
          updateScore()
        }

      } else {

        let prevElem = document.querySelector(`.clicked`)
        localStorage.item = 'empty'
        localStorage.score = Number(localStorage.score) + 1
        updateScore()

        switchClick('off', document.querySelectorAll('img'))
        setTimeout(() => {
          switchClick('on', document.querySelectorAll('img'))
          prevElem.classList.remove('open', 'clicked')
          elem.classList.remove('open')
        }, 2000)
      }
    }
  }

  render() {
    return (
  		<div value = {this.props.card.value} className = 'card-holder' onClick = {this.handleClick}>
        <img src = {this.props.card.url} className = 'front'/>
        <img src = '/png/back/back@2x.png' className = 'back' />
  		</div>
    )
  }
}


export default Card
