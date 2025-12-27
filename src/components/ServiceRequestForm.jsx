import { useEffect, useState } from "react"
import axios from "axios"
import Select from "react-select"
import services from "../assets/services.json"

const ServiceRequestForm = ({ ServiceRequest, setServiceRequest }) => {
  const initialState = { Car: null, Service: [], Description: "" }
  const [formState, setFormState] = useState(initialState)
  const [cars, setCars] = useState([])

  useEffect(() => {
    const fetchCars = async () => {
      const res = await axios.get("http://localhost:3000/cars")

      const carOptions = res.data.map((car) => ({
        value: car._id
      }))

      setCars(carOptions)
    }

    fetchCars()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const payload = {
      car: formState.Car.value,
      service: formState.Service.map((s) => s.value),
      description: formState.Description,
    }

    const response = await axios.post(
      "http://localhost:3000/servicereqs",
      payload
    )

    setServiceRequest([...ServiceRequest, response.data])
    setFormState(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Your Car</label>
      <Select
        options={cars}
        value={formState.Car}
        onChange={(selected) => setFormState({ ...formState, Car: selected })}
        placeholder="Select your car"
      />

      <label>Offered Services</label>
      <Select
        options={services}
        isMulti
        value={formState.Service}
        onChange={(selected) =>
          setFormState({ ...formState, Service: selected })
        }
        placeholder="Offered Services"
      />

      <label>Description</label>
      <textarea
        name="Description"
        rows="6"
        onChange={handleChange}
        value={formState.Description}
      />

      <button type="submit">Send</button>
    </form>
  )
}

export default ServiceRequestForm
