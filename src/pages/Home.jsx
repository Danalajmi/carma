import { useEffect } from "react"
import { getAll_garages } from "../services/garage"
import { useState } from "react"
import Garage from "../components/Garage"
import "../assets/style/home.css"
const Home = () => {
  const [garages, setGarages] = useState([])
  useEffect(() => {
    const Allgarages = async () => {
      let garageList = await getAll_garages()
      setGarages(garageList)
      return garageList
    }
    Allgarages()
  }, [])
  return (
    <div className="garage-grid">
      {garages.map((garage) => (
        <Garage key={garage._id} garage={garage} />
      ))}
    </div>
  )
}

export default Home
