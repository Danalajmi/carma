import { useContext } from "react"
import userContext from "../context/userContext"
import MainDetailsCard from "../components/MainDetailsCard"
import InterestedCard from "../components/InterestedCard"
import {  useNavigate } from "react-router-dom"

const Dashboard = () => {
  const Navigate = useNavigate()
  const { user } = useContext(userContext)
  console.log(user)

  let title = ""
  if(user){

    if (user.role === "Garage Owner") { title = user.name }
    else if (user.role === "Car Owner") { title = user.name }
    else {title = "Who let you in here?"}

    let leftPanel = ""
    if (user.role === "Garage Owner") { leftPanel = "Service Requests"}
    else if (user.role === "Car Owner") { leftPanel = "My Cars"}

    let rightPanel = ""
    if (user.role === "Garage Owner") { rightPanel = "My Interests"}
    else if (user.role === "Car Owner") { rightPanel = "Sent Requests"}
  }

  return user ? (
    <div className="dashboard">
      <h1>{title} Dashboard</h1>

      <div className="dashboard-panels">

        <div className="left-panel">
          <p>___________________</p>
          <h2>{leftPanel}</h2>
          <MainDetailsCard />
        </div>

        <div className="right-panel">
          <p>___________________</p>
          <h2>{rightPanel}</h2>
          <InterestedCard />
        </div>

      </div>
    </div>
  ) : ( (Navigate('/')) )
}

export default Dashboard
