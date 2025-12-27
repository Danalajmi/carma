import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import App from "./App.jsx"
import { UserProvider } from "./context/userContext.jsx"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './context/userContext.jsx'
import Nav from './components/Nav.jsx'

createRoot(document.getElementById("root")).render(
  <UserProvider>
  <BrowserRouter>
    <Nav />
    <App />
  </BrowserRouter>
  </UserProvider>,

)
