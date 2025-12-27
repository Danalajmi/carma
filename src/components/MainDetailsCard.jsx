import { useContext } from "react"
import userContext from "../context/userContext"

const MainDetailsCard = () => {
  const { user } = useContext(userContext)

  return (
    <div className="main-details-card">
      <h3>Car Brand</h3>
      <h4>Type of Problem</h4>
      <p>Problem description goes here</p>
      {user.role === "Car Owner" ? (<button>Submit Request</button>) : (<button>Show Interest</button>)}
    </div>
  )
}

export default MainDetailsCard
