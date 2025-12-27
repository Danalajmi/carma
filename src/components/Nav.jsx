import { Link } from "react-router-dom"
import { useContext } from "react"
import userContext from "../context/userContext"

const Nav = () => {
  const { user } = useContext(userContext)
  return (
    <header>
      <nav>
        <Link to="/home"> Home </Link>
        {user ? (
          <>
            <Link to="/dashboard"> My Dashboard </Link>
            <Link to="/"> Log Out </Link>
          </>
        ) : (
          <Link to="/auth/login"> Login </Link>
        )}
      </nav>
    </header>
  )
}

export default Nav
