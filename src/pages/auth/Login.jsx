import { useState } from "react"
import { LogInUser } from "../../services/auth"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const Navigate = useNavigate
  const initValues = {
    email: "",
    password: "",
  }

  const [loginInfo, setInfo] = useState(initValues)

  const handleChange = (event) => {
    setInfo({ ...loginInfo, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await LogInUser(loginInfo)
    Navigate('/home')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={loginInfo.email}
          placeholder="Enter Your Email"
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          value={loginInfo.password}
          placeholder="Enter Your Password"
          onChange={handleChange}
          required
        />
      </form>
    </div>
  )
}

export default Login
