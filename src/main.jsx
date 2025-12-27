import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/userContext.jsx'
import App from "./App.jsx"
import Nav from './components/Nav.jsx'

createRoot(document.getElementById("root")).render(
  <UserProvider>
  <BrowserRouter>
    <Nav />
    <App />
  </BrowserRouter>
  </UserProvider>,

)
