function Score(props) {

  let name = localStorage.score

  return (
    <div  id = 'score'>
      {props.score}
    </div>
  )
}

export default Score
