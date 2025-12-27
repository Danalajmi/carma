import { useContext } from "react"
import userContext from "../context/userContext"
import MainDetailsCard from "../components/MainDetailsCard"
import InterestedCard from "../components/InterestedCard"

const Dashboard = () => {
  const { user } = useContext(userContext)
  console.log(user)

  let title = ""
  if (user.role === "Garage Owner") { title = "Garage Dashboard"}
  else if (user.role === "Car Owner") { title = "My Cars Dashboard"}
  else {title = "Who let you in here?"}

  let leftPanel = ""
  if (user.role === "Garage Owner") { leftPanel = "Service Requests"}
  else if (user.role === "Car Owner") { leftPanel = "My Cars"}

  let rightPanel = ""
  if (user.role === "Garage Owner") { rightPanel = "My Interests"}
  else if (user.role === "Car Owner") { rightPanel = "Sent Requests"}

  return(
    <div className="dashboard">
      <h1>{title}</h1>

      <div className="dashboard-panels">

        <div className="left-panel">
          <h2>{leftPanel}</h2>
          <MainDetailsCard />
        </div>

        <div className="right-panel">
          <h2>{rightPanel}</h2>
          <InterestedCard />
        </div>

      </div>
    </div>
  )
}

export default Dashboard
