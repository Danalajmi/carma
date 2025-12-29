import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import UserContext from "../context/userContext"
import "../assets/style/nav.css"

const Nav = () => {
  const { user, saveUser } = useContext(UserContext)

  const handleLogOut = (e) => {
    saveUser(null)
    localStorage.clear()

  }
  return (
    <header className="main-header">
      <nav className="navbar">
        <Link className="nav-logo" to="/">
          Home
        </Link>
        <div className="nav-links">
          {user ? (
            <>
              <Link to="/dash"> My Dashboard </Link>
              <Link to="/new">
                Add a new {user.role === "Car Owner" ? "Car" : "Garage"}
              </Link>
              <Link onClick={handleLogOut} className="logout-btn" to='/'>
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link to="/auth/login"> Log in </Link>
              <Link to="/auth/register" className="register-btn">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Nav
