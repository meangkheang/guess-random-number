import "./index.css";
import { useState,useEffect } from "react";
import Button from './Button'
import {show,secretNumber,
        applyRandomOrder

        } from './functions.js'

export default function App() {

  const [value,setValue] = useState(true);
  const [result,setResult] = useState('');
  const [points,setPoints] =useState(0);
  const [lives,setLives] =useState(3);
  const [status,setStatus] =useState('false');




  let test = secretNumber();
  let troll = 'lol';

  useEffect(()=>{

    applyRandomOrder(test);

  },[value]);

  return (
    <div className="w-screen m-4 shadow-lg p-4 ">
      <h3 className="text-xl font-bold text-center">Guess Random Number {status} </h3><br/><br/>
      <div className="content">

        <div className='mb-14 flex justify-around text-lg font-semibold'>
          <div>
                <Button text='Show Answer' hexColor='#464141' secretNumber={test} troll={troll}/>
            </div>
          <div>
            <h4>Lives : {lives}</h4>
            <h4>Points : {points}</h4>
          </div>
        </div>

        <div id="picks" className="mt-14 w-full flex gap-14 justify-center mb-14   
                                  p-10" >
          <Button text={4} hexColor='#464141' show={show} setValue={setValue} 
          value={value}
          setResult={setResult} result={result}
          secretNumber={test}
          setPoints={setPoints}
          points ={points}
          setLives={setLives}
          lives ={lives}
          setStatus={setStatus}
          status={status}/>

          <Button text={40} hexColor='#464141' show={show} setValue={setValue} value={value}
          setResult={setResult} result={result} 
          secretNumber={test}
          setPoints={setPoints}
          points ={points}
          setLives={setLives}
          lives ={lives}
          setStatus={setStatus}
          status={status}/>

          <Button text={100} hexColor='#464141' show={show} setValue={setValue} value={value}
          setResult={setResult} result={result}
          secretNumber={test}
          setPoints={setPoints}
          points ={points}
          setLives={setLives}
          lives ={lives}
          setStatus={setStatus}
          status={status}/>

        </div>

        <div className="text-center">
          <h2 className="mt-14 font-semibold inline-block px-4 py-4 bg-[#464141] text-white
          rounded">
            <span>Result : </span>
            <span className={`text-${status === 'true' ? 'green': 'red'}-300`}>{ result.length == 0  ? 'none' : result }</span>
          </h2>
        </div>

      </div>
    </div>
  );
}
