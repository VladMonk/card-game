import Name from '../display-name/display-name'
import Score from '../display-score/display-score'

function Header(props) {
  return (
    <div id = 'header'>
      <Name />
      <Score />
    </div>
  )
}

export default Header
