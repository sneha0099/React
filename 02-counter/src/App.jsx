import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter , setCounter] = useState(15)

  //  let counter = counter + 1


  const addValue = () =>{
    console.log("clicked" , counter)
   // counter = counter + 1
   if(counter<20){
    setCounter(counter+1)
   }
    
  }

  const removeValue = () =>{

    if(counter>0){
      setCounter(counter-1)
    }
    
    
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h3>Counter value:{counter} </h3>

      <button onClick={addValue}>Add value{counter}</button>
      <br/>
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>

    </>
  )
}

export default App
