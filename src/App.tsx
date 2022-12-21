import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import defaultImage from "./assets/default.gif";
import Music from "./reducer.jsx"
//https://beta.reactjs.org/apis/react/useReducer


function App() {
  const [music, setMusic] = useState({
    source: new Audio("src/assets/candy.mp3"),
    play: true
  })
  const playMusic = () => {
    if (music.play) {
      music.source.play();
    } else {
      music.source.pause();
    }
    setMusic({...music, play: !music.play});
  };
  return (
    <div className="App">
      <div className="grid-container">
        <Music></Music>
        <div className="grid-item image" onClick={playMusic}>
          <img src={defaultImage} />
        </div>
        <div className="grid-item">Fun
        <div className="bar">
            <div className="bar-inside"></div>
          </div>
        
        </div>
        <div className="grid-item">
          Sleep
         
        </div>
        <div className="grid-item">
          Energy
          <div className="bar">
            <div className="bar-inside"></div>
          </div>
        </div>
        <div className="grid-item">Play</div>
        <div className="grid-item">Toilet
        <div className="bar">
            <div className="bar-inside"></div>
          </div>
        </div>
        <div className="grid-item">Dress</div>
        <div className="grid-item">&lt;&lt; Your choice &gt;&gt;</div>
        {/* maybe counter to steal cookies here? */}
        <div className="grid-item">Use toilet!</div>
      </div>
    </div>
  );
}

export default App;
