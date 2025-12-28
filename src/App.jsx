import { useContext, useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Nav from "./components/Nav"
import "./App.css"
import Register from "./pages/auth/Register"
import Login from "./pages/auth/Login"
import Home from "./pages/Home"
import New from "./components/New"
import UserContext from "./context/userContext"
import Dashboard from "./pages/Dashboard"
import ServiceRequestForm from "./components/ServiceRequestForm"

const App = () => {
  const { user, saveUser, checkToken } = useContext(UserContext)

  return (
    <>
      <h1>Welcome to Carma</h1>
      <main>
        <Routes>
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login setUser={saveUser} />} />
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/SRF" element={<ServiceRequestForm />} />
        </Routes>
      </main>
    </>
  )
}

export default App
