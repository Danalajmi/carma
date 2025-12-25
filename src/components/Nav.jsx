import { Link } from "react-router-dom"
import { useState } from "react"

const Nav = () => {
  const [user, setUser] = useState(null)

  return (
    <header>
      <nav>
        <Link to="/"> Home </Link>
        {user ? (
          <>
            <Link to="/dash"> My Dashboard </Link>
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
