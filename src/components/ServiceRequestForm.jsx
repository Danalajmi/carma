import { useEffect, useState } from "react"
import axios from "axios"
import Select from "react-select"
import services from "../assets/services.json"
import carBrands from "../assets/carBrands.json"
import { sendRequest } from "../services/serviceReq"
import "../assets/style/New.css"

const ServiceRequestForm = ({ ServiceRequest, setServiceRequest, car, collapseForm,submittedRequests, setSubmittedRequests }) => {
  const initialState = { Car: null, Service: [], Description: "" }
  const [formState, setFormState] = useState(initialState)
  const [cars, setCars] = useState([])

  // useEffect(() => {
  //   const fetchCars = async () => {
  //     const res = await axios.get("http://localhost:3000/cars")

  //     const cars = res.data.map((car) => ({
  //       value: car._id,
  //     }))

  //     setCars(cars)
  //   }

  //   fetchCars()
  // }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }


  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = {

      service: formState.Service.map((service) => service.label),
      description: formState.Description,
    }

    let response = await sendRequest(car, form)
    collapseForm()
    // setServiceRequest([...ServiceRequest, response.data])

    // setFormState(initialState)

  }

  return (
    <div className="form-container dark">
      <form onSubmit={handleSubmit}>


        <label>Offered Services</label>
        <Select
          options={services}
          closeMenuOnSelect={false}
          isMulti
          isSearchable={true}
          value={formState.Service}
          classNamePrefix="react-select"
          className="multiselect"
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
    </div>
  )
}

export default ServiceRequestForm
