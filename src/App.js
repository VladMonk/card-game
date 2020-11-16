import logo from './logo.svg';
import './App.css';

import MainMenu from './components/main-menu/main-menu'
import Playground from './components/playground/playground'
import Leaderboard from './components/leaderboard/leaderboard'


function App() {
  return (
    <div className="App">
      <Playground difficult = '20'/>
    </div>
  );
}

export default App;
