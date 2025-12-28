import { Link } from "react-router-dom"
import { useContext } from "react"
import userContext from "../context/userContext"

const Nav = () => {
  const { user, saveUser } = useContext(userContext)

  const handleLogout = () => {
    saveUser(null)
  }
  return (
    <header>
      <nav>
        <Link to="/home"> Home </Link>
        {user ? (
          <>
            <Link to="/dashboard"> My Dashboard </Link>
            <Link to="/auth/login" onClick={handleLogout}> Log Out </Link>
          </>
        ) : (
          <Link to="/auth/login"> Login </Link>
        )}
      </nav>
    </header>
  )
}

export default Nav
