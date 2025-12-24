import { useState } from "react"
import { useNavigate } from "react-router-dom"
import New from "../../components/New"
import '../../assets/style/Registery.css'
const Register = () => {
  const initValues = {
    name: "",
    email: "",
    password: "",
    phoneNumber: undefined,
    role: "Garage Owner",
  }

  const [userValues, setValues] = useState(initValues)

  const handleChange = (event) => {
    setValues({ ...setValues, [event.target.name]: event.target.value })
  }
  const setRole = (SelectedRole) => {
    setValues({...userValues, role: SelectedRole})
  }
  return (
    <div className="Registry">
      <form>
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

          <button type="submit">Submit</button>
      </form>

        {userValues.role ? <New role={userValues.role} /> : null}
    </div>
  )
}

export default Register
