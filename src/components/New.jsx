import { useState, useContext, useEffect } from "react"
import Select from "react-select"
import carBrands from "../assets/carBrands.json"
import services from "../assets/services.json"

import "../assets/style/New.css"
import { createGarage } from "../services/garage"
import { createCar } from "../services/car.js"

import { useNavigate } from "react-router-dom"
import userContext from "../context/userContext"

const New = () => {
  const Navigate = useNavigate()
  const { user } = useContext(userContext)

  const initCar = {
    title: "",
    year: "",
    model: "",
  }
  const initGarage = {
    name: "",
    location: "",
    phone: "",
    description: "",
    services: [],
    carBrands: [],
  }
  const [carInfo, setCar] = useState(initCar)
  const [garageInfo, setGarage] = useState(initGarage)

  const handleChange = (event) => {
    if (user?.role === "Car Owner") {
      setCar({ ...carInfo, [event.target.name]: event.target.value })
    } else if (user?.role === "Garage Owner") {
      setGarage({ ...garageInfo, [event.target.name]: event.target.value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (user.role == "Garage Owner") {
      await createGarage(garageInfo)
      setGarage(initGarage)
    } else if (user.role === "Car Owner") {
      await createCar(carInfo)
      setCar(initCar)
    }
    Navigate("/dash")
  }

  const setCarBrand = (selectedBrands) => {
    if (user?.role === "Garage Owner") {
      let brandString = selectedBrands.map((brand) => brand.label)
      setGarage({ ...garageInfo, carBrands: brandString })
    } else if (user?.role === "Car Owner") {
      setCar({ ...carInfo, carBrand: selectedBrands.label })
    }
  }
  const setServices = (selectedServices) => {
    let serviceString = selectedServices.map((service) => service.label)
    setGarage({ ...garageInfo, services: serviceString })
  }
  if (user?.role === "Car Owner") {
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
  } else if (user?.role === "Garage Owner") {
    return (
      <div>
        <form onSubmit={handleSubmit} className="form-container dark">
          {/* <label htmlFor="name">Garage name</label> */}
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={garageInfo.name}
            placeholder="Garage Name"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
            value={garageInfo.location}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            value={garageInfo.phone}
          />

          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            value={garageInfo.description}
          />
          <Select
            options={carBrands}
            closeMenuOnSelect={false}
            isMulti
            isSearchable={true}
            classNamePrefix="react-select"
            className="multiselect"
            onChange={setCarBrand}
            placeholder="Supported Car brands"
          />
          <br />
          <Select
            options={services}
            closeMenuOnSelect={false}
            isMulti
            isSearchable={true}
            classNamePrefix="react-select"
            className="multiselect"
            onChange={setServices}
            placeholder="Offered Services"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default New
