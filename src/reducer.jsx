import { useReducer } from 'react';

const initialState = {
      audio: null,
      isPlaying: true
};

function reducer(state, action) {
  const song = new Audio("src/assets/candy.mp3"); 
  if(state.isPlaying) {    
    return {
      audio: song.play(),
      isPlaying: false
  }; 
  } else { 
      return {
        audio: song.pause() 
      };
    } 
  
}

export default function Music() {
  const [state, dispatch] = useReducer(reducer, initialState); 
  return (
  <div className="grid-item" onClick={() => dispatch()}>Eat</div>
  );
}
