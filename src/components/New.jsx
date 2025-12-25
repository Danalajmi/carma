import { useState } from "react"
import Select from "react-select/base"
import carBrands from "../assets/carBrands.json"
import services from "../assets/services.json"

import "../assets/style/New.css"
import { RegisterUser } from "../services/auth"
import { createGarage } from "../services/garage"
import { createCar} from "../services/car.js"

const New = ({ role, userInfo, setUSer, userInit }) => {
  const initCar = {
    title: "",
    carBrand: "",
    year: undefined,
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


  const [selectedCarBrands, setSelectedCarBrands] = useState([])
  const [selectedServices, setSelectedServices] = useState([])

  const handleChange = (event) => {
    if (role === "Car Owner") {
      setCar({ ...carInfo, [event.target.name]: event.target.value })
    } else {
      setGarage({ ...garageInfo, [event.target.name]: event.target.value })
    }
  }

  const handleSubmit = async () => {
    e.preventDefault()
    
    await RegisterUser({ userInfo })
    setUSer(userInit)
    if(role == 'Garage Owner'){
      await createGarage({ garageInfo })
    setGarage(initGarage)
    }else if(role === 'Car Owner'){
      await createCar({carInfo})
      setCar(initCar)
    }

    Navigate("/Login")
  }


  const setCarBrand = () => {
    setGarage({
      ...garageInfo,
      [garageInfo.carBrands]: garageInfo.carBrands.push(),
    })
  }
  if (role === "Car Owner") {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={carInfo.title}
            onChange={handleChange}
          />

          <label htmlFor="carBrand">Your Car's Brand</label>
          <input
            type="text"
            name="carBrand"
            placeholder="Car Brand"
            value={carInfo.carBrand}
            onChange={handleChange}
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
  } else {
    return (
      <div>
        <form>
          <input type="text" name="name" placeholder="Garage Name" />

          <input type="text" name="location" placeholder="Location" />

          <input type="tel" name="phone" placeholder="Phone" />

          <textarea name="description" placeholder="Description" />
          <Select
            options={carBrands}

            closeMenuOnSelect={false}
            isMulti
            isSearchable= {true}
            className="multiselect"
            onChange={setCarBrand}
            placeholder="Supported Car brands"
          />
          <br />
          <Select
            options={services}

            closeMenuOnSelect={false}
            isMulti
            isSearchable= {true}
            className="multiselect"
            onChange={setCarBrand}
            placeholder="Offered Services"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default New
