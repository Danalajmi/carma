import { useState } from "react"
import axios from "axios"
import Select from "react-select"
import services from "../assets/services.json"

const ServiceRequestForm = ({ ServiceRequest, setServiceRequest }) => {
  const initialState = {
    Car: "",
    Service: "",
    Description: "",
  }

  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.post('http://localhost:3000/ServiceRequestForm', formState)
    let FormData = [...ServiceRequest]
    FormData.push(response.data)
    setServiceRequest(FormData)
    setFormState(initialState)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Car" value = {event.value.Car}>Your Car: </label>
     <Select
            options={services}
            closeMenuOnSelect={false}
            isMulti
            isSearchable={true}
            className="multiselect"
            onChange={setServiceRequest}
            placeholder="Offered Services"
          />
      <label htmlFor="Description">Description</label>
      <textarea
        name="Description"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={formState.Description}
        autoComplete="off"
      ></textarea>
      <button type="submit">Send</button>
    </form>
  )
}

  export default ServiceRequestForm
