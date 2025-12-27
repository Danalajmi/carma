import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import UserContext from "../context/userContext"

const Nav = () => {
  const { user, saveUser } = useContext(UserContext)

  const handleLogOut = (e) => {
    saveUser(null)
    localStorage.clear()
  }
  return (
    <header>
      <nav>
        <Link to="/home"> Home </Link>
        {user ? (
          <>
            <Link to="/dash"> My Dashboard </Link>
            <Link to="/new"> Add a new garage </Link>
            <Link to="/home" onClick={handleLogOut}>
              {" "}
              Log Out{" "}
            </Link>
          </>
        ) : (
          <Link to="/auth/login"> Login </Link>
        )}
      </nav>
    </header>
  )
}

export default Nav
