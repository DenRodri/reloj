import React from 'react'
import {useState, useEffect} from 'react';
import './App.css';

export default function App() {

  const [time, setTime] = useState('');
  const[ticker, setTicker] = useState('on');
  function formatTime(val){
    if(val < 10 ){
      return '0';
    }else{
      return '';
    }
  }
  function StopStart(order){
    if(order === "Stop"){
      setTicker("off");
    }else if(order === "Start"){
      setTicker("on");
    }
  }
  useEffect(() => {
    if(ticker === 'on'){
    const timerID = setInterval(
      () => tick(), 1000)

      return function cleanup(){
        clearInterval(timerID);
      }
    }
  })

  function tick(){
    //Date variables
    const deg = 6;
    const hr = document.querySelector('#hr');
    const mn = document.querySelector('#mn');
    const sc = document.querySelector('#sc');
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    hr.style.transform = `rotateZ(${(h*30)+(m/12)}deg)`;
    mn.style.transform = `rotateZ(${m*deg}deg)`;
    sc.style.transform = `rotateZ(${s*deg}deg)`;
    setTime(formatTime(h) + h + ':' + formatTime(m) + m + ':' + formatTime(s)+s);
  }
  return (
    <>
    <div className="clock">
      <div className="screen">
        <h1 className="time">{time}</h1>
      </div>
    </div>
    <div className="buttons">
    <button onClick={() => StopStart("Start")}>Empezar</button>
    <button onClick={() => StopStart("Stop")}>Parar</button>
    </div>
    <div className="image">
      <div className="hour">
        <div className="hr" id="hr"></div>
      </div>
      <div className="min">
        <div className="mn" id="mn"></div>
      </div>
      <div className="sec">
        <div className="sc" id="sc"></div>
      </div>
    </div>
    </>
  )

  
}
