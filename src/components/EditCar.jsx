import { useState, useContext, useEffect } from "react"
import Select from "react-select"
import carBrands from "../assets/carBrands.json"
import services from "../assets/services.json"

import "../assets/style/New.css"
import { updateCar, deleteCar, getCars } from "../services/car"
import { useNavigate } from "react-router-dom"
import userContext from "../context/userContext.jsx"

const New = () => {
  const Navigate = useNavigate()
  const { user } = useContext(userContext)

  const initCar = {
    title: "",
    year: "",
    model: "",
  }

  const [carInfo, setCar] = useState(initCar)

  const handleChange = (event) => {
    setCarInfo({ ...carInfo, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const updatedCar = await updateCar(car._id, carInfo)
      onUpdate(updatedCar)
      onClose()
    } catch (error) {
      console.error("Error updating car:", error)
      alert("Failed to update car")
    }
  }

  const setCarBrand = (selectedBrand) => {
    setCarInfo({ ...carInfo, carBrand: selectedBrand.label })
  }

  const defaultBrand = carBrands.find((brand) => brand.label === car.carBrand)

  return (
    <div className="form-container dark">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={carInfo.title}
          onChange={handleChange}
          placeholder="Car Name"
        />

        <Select
          options={carBrands}
          closeMenuOnSelect={true}
          isMulti={false}
          isSearchable={true}
          classNamePrefix="react-select"
          className="multiselect"
          onChange={setCarBrand}
          placeholder="Supported Car brands"
        />

        <label htmlFor="model">Your Car's model</label>
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={carInfo.model}
          onChange={handleChange}
        />

        <label htmlFor="year">Year of make</label>
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={carInfo.year}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default New
