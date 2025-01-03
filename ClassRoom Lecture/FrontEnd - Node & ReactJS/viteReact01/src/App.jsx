import React from 'react'
import Todo from "./Todo"
import { Link, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';




const App = () => {
  return (
    <div>
      <Todo />
      <Link to="/register">Register</Link>
      <br/>
      <Link to="/home">Home</Link>


      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
       
      </Routes>
    </div>
  )
}

export default App