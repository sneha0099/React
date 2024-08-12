import { useState } from 'react'
import { BrowserRouter , Routes , Route} from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Usersignup } from './pages/Usersignup'
import './App.css'


const App = () => {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Usersignup/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
