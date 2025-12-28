import { useContext, useState } from "react"
import userContext from "../context/userContext"
import MainDetailsCard from "../components/MainDetailsCard"
import InterestedCard from "../components/InterestedCard"
import services from "../assets/services.json"

const Dashboard = () => {
  const { user } = useContext(userContext)
  console.log(user)

  // my sample cars
  const [cars, setCars] = useState([
    { id: 1, brand: "BMW", model: "2021" },
    { id: 2, brand: "Audi", model: "2020" }
  ]);

  const [submittedRequests, setSubmittedRequests] = useState([])
  const [interestedRequests, setInterestedRequests] = useState([])


  const handleInterest = (newInterest) => {
    setInterestedRequests((interests) => [...interests, newInterest])
  }

  let title = user.name
  let leftPanel = user.role === "Garage Owner" ? "Service Requests" : "My Cars"
  let rightPanel = user.role === "Garage Owner" ? "My Interests" : "Sent Requests"

  return (
    <div className="dashboard">
      <h1>{title} Dashboard</h1>

      <div className="dashboard-panels">
        <div className="left-panel">
          <h2>{leftPanel}</h2>
          <MainDetailsCard
            items={user.role === "Car Owner" ? cars : submittedRequests}
            role={user.role}
            onSubmitRequest={
              user.role === "Car Owner" ? (newRequest) =>
              setSubmittedRequests((requests) => [...requests, newRequest]) : handleInterest
            }
          />
        </div>


        <div className="right-panel">
          <h2>{rightPanel}</h2>
            <InterestedCard items={user.role === "Car Owner" ? submittedRequests : interestedRequests } role={user.role}/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
