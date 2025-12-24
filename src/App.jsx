import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Register from './pages/auth/Register';

const App = () => {
  return (
    <>
    <h1>Welcome to Carma</h1>
    <main>

    <Routes>
      <Route path='/Register' element={<Register/>}/>
    </Routes>
    </main>
    </>
  );
}

export default App;
