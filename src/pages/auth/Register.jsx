import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import New from "../../components/New"
import { RegisterUser } from "../../services/auth"
import '../../assets/style/Registry.css'


const Register = () => {
  const Navigate = useNavigate()
  const initValues = {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: null,
  }

  const [userValues, setValues] = useState(initValues)

  const handleChange = (event) => {
    setValues({ ...userValues, [event.target.name]: event.target.value })
  }
  const setRole = (SelectedRole) => {
    setValues({...userValues, role: SelectedRole})
  }


    const handleSubmit = async (e) => {
      e.preventDefault()
      await RegisterUser(userValues)
      Navigate("/auth/login")
    }
  return (
    <div className="Registry">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={userValues.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={userValues.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={userValues.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          value={userValues.phoneNumber}
          onChange={handleChange}
          required
        />

          <button onClick={() => setRole('Car Owner')}
            type="button">
            Car Owner
          </button>
          <button onClick={() => setRole('Garage Owner')}
            type="button">
            Garage Owner
          </button>

      <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>


    </div>
  )
}

export default Register
