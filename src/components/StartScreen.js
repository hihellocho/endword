import { useState } from "react";

const StartScreen = ({onStart}) => {
  const [input, setInput]=useState('');
  const handleSubmit =(event)=>{
    event.preventDefault();
    if(input.trim()){
      onStart(input.trim());
    }else{
      alert("시작단어를 입력하세요");
    }
  }
  return (
    <div className="start-screen">
      <h1>
        Hello
        <br />
        I'AM 말잇쮸
      </h1>
      <form className="input-form" onSubmit={handleSubmit}>
        <h2>시작 단어를 입력하세요</h2>
        <input
        type="text"
        value={input}
        onChange={(e)=>{setInput(e.target.value)}}
        />
        <button type="submit">Get Started</button>
      </form>
    </div>
  );
};

export default StartScreen;
