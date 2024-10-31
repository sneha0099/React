import { useEffect, useState , useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const [name, setName] = useState('name')



  // function increase(){
  //   // setCount((count) => count+4);
    

  //   //setCount(count+1);
  //   //if setcount done this way and then we increment by prev value so if will first add +1 and then you can read prev value but if you first do addition by prev value then do by count+1 direcly this will overwrite the changes 

  //   //e.g
  //   // setCount(count+1);
  //   // setCount((prev)=>prev+4)
  //   // setCount((prev)=>prev+1)
  //   // output -> 1 +4 +1 = 6

  //   // setCount((prev)=>prev+4)
  //   // setCount((prev)=>prev+1)
  //   // setCount(count+1);
  //   // output -> +1 only it will overwrite the changes of before btcause setcoount(count+1) reads initial value of it and add by one.


  //   // setCount((prev)=>prev+4)
  //   // setCount((prev)=>prev+1) // this two line will add by 5 first +4 then +1 =5

  //   // setCount(count+1);
  //   // setCount(count+5);// if we increse in this way this will change accourding which is last in this case will add by 5 and overwrite all before of it changes
    
  // }

  // useEffect(()=>{
  //   setTimeout(() => {
  //     setCount((count)=> count +1);
  //   }, 2000);
  // },[])// this will run only one time which is initial because name dont changes
  // if we leave it blank then also run for only one time which is initial
  // if we remove dependency array then it will run countinously because it will run when any state changes in whole code so here count is changing so it will run infinately
  // if we use count in depemndency array then it will run countinously because it will run when when the count changes because we used count in dependecy array. 

  // const [value , setValue] = useState(0);
  // const count = useRef(0);

  // useEffect(()=>{
  //   count.current = count.current+1;
    
  // })

  const [number , setNumber] = useState(0);
  const [counter , setCounter] = useState(0);

  function cube(number){
    return Math.pow(number , 3);
  }
  const result = cube(number);
  return (
    <div>
      {/* <div>count is:</div>
      <div>{count}</div>
      <button onClick={increase}>increase</button> */}

      {/* <button onClick={()=>setValue((prev)=>prev+1)}>+</button>
      <div>value is:{value}</div>
      <button onClick={()=>setValue((prev)=>prev-1)}>-</button>
      <div>{count.current}</div> */}

      <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)} />
      <h2>cube is {result}</h2>
    </div>
  )
}

export default App
