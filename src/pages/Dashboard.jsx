import { useContext, useState } from "react"
import userContext from "../context/userContext"
import MainDetailsCard from "../components/MainDetailsCard"
import InterestedCard from "../components/InterestedCard"
import services from "../assets/services.json"

const Dashboard = () => {
  const { user } = useContext(userContext)
  console.log(user)

  const [submittedRequests, setSubmittedRequests] = useState([])
  const [interestedRequests, setInterestedRequests] = useState([])


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
            items={submittedRequests}
            role={user.role}
            onSubmitRequest={(newRequest) =>
              setSubmittedRequests((requests) => [...requests, newRequest])
            }
          />
        </div>
        <div className="right-panel">
          <h2>{rightPanel}</h2>
            <InterestedCard items={submittedRequests} role={user.role}/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
