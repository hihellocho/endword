import { useState } from "react";
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";
import "./App.scss";


const App = () => {
  const [started, setStarted]=useState(false);
  const [startWord, setStartWord]=useState('');
  const handleStart=(word)=>{
    setStartWord(word);
    setStarted(true);
  }
  return (
    <div className="app">
      {
        !started ? (<StartScreen onStart={handleStart} />)
        : (<GameScreen startWord={startWord}/>)
      }
    </div>
  );
};

export default App;