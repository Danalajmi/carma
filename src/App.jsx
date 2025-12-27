import { useContext, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import New from './components/New';
import UserContext from './context/userContext';
import Nav from "./components/Nav"



const App = () => {
const {user, saveUser} = useContext(UserContext)
  return (
    <>
    <Nav />
    <h1>Welcome to Carma</h1>
    <main>

    <Routes>
      <Route path='/auth/register' element={<Register/>}/>
      <Route path='/auth/login' element={<Login setUser={saveUser}/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/new' element={<New user={user} />}/>
    </Routes>
    </main>
    </>
  );
}

export default App;
