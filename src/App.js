import logo from './logo.svg';
import './App.css';

import MainMenu from './components/main-menu/main-menu'
import Playground from './components/playground/playground'
import Leaderboard from './components/leaderboard/leaderboard'
import Card from './components/card/card'


function App() {
  return (
    <div className="App">
      <Playground difficult = '28' />
    </div>
  );
}

export default App;
