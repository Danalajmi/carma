import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';


const App = () => {
  return (
    <>
    <h1>Welcome to Carma</h1>
    <main>

    <Routes>
      <Route path='/auth/register' element={<Register/>}/>
      <Route path='/auth/login' element={<Login/>}/>
    </Routes>
    </main>
    </>
  );
}

export default App;
