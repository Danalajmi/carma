import { useContext } from "react"
import userContext from "../context/userContext"


const Dashboard = () => {
  const { user } = useContext(userContext)

  let title = ""
  if (user.role === "Garage Owner") { title = "Garage Dashboard"}
  else if (user.role === "Car Owner") { title = "My Cars Dashboard"}
  else {title = "Who let you in here?"}

  return(
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default Dashboard
