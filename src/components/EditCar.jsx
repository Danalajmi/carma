import { useState, useContext, useEffect } from "react"
import Select from "react-select"
import "../assets/style/New.css"
import carBrands from "../assets/carBrands.json"
import { updateCar, deleteCar, getCars } from "../services/car"
import { useParams, useNavigate } from "react-router-dom"
import userContext from "../context/userContext.jsx"

const EditCar = () => {
  const { carId } = useParams()
  const navigate = useNavigate()

  const [carInfo, setCarInfo] = useState({
    title: "",
    year: "",
    model: "",
    carBrand: "",
  })

  const [originalTitle, setOriginalTitle] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCarData = async () => {
      const cars = await getCars()
      const car = cars.find((c) => c._id === carId)

      if (car) {
        setCarInfo({
          title: car.title || "",
          year: car.year || "",
          model: car.model || "",
          carBrand: car.carBrand || "",
        })
      }
      setLoading(false)
    }

    fetchCarData()
  }, [carId, navigate])

  const handleChange = (event) => {
    setCarInfo({ ...carInfo, [event.target.name]: event.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const dataToSend = {
      title: carInfo.title,
      model: carInfo.model,
      year: Number(carInfo.year),
      carBrand: carInfo.carBrand,
    }
    await updateCar(carId, dataToSend)
    navigate("/dashboard")
  }

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete ${carInfo.title}?`)) {
      await deleteCar(carId)
      navigate("/dashboard")
    }
  }
  const setCarBrand = (selectedBrand) => {
    setCarInfo({ ...carInfo, carBrand: selectedBrand.label })
  }

  const defaultBrand = carBrands.find(
    (brand) => brand.label === carInfo.carBrand
  )

  if (loading) {
    return (
      <div className="form-container dark">
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <div className="form-container dark">
      <h2>Edit Car</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={carInfo.title}
          onChange={handleChange}
          placeholder="Car Name"
          required
        />

        <label htmlFor="carBrand">Car Brand</label>
        <Select
          options={carBrands}
          closeMenuOnSelect={true}
          isMulti={false}
          isSearchable={true}
          classNamePrefix="react-select"
          className="multiselect"
          onChange={setCarBrand}
          value={defaultBrand}
          placeholder="Select Car Brand"
        />

        <label htmlFor="model">Model</label>
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={carInfo.model}
          onChange={handleChange}
          required
        />

        <label htmlFor="year">Year of Make</label>
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={carInfo.year}
          onChange={handleChange}
          required
        />

        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <button type="submit" style={{ flex: 1 }}>
            Update Car
          </button>
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            style={{
              flex: 1,
            }}
          >
            Cancel
          </button>
        </div>

        <button
          type="button"
          onClick={handleDelete}
          style={{
            width: "100%",
            marginTop: "1rem",
            background: "#dc2626",
          }}
        >
          Delete Car
        </button>
      </form>
    </div>
  )
}

export default EditCar
