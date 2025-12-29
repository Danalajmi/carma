import { useContext, useState, useEffect } from "react"
import userContext from "../context/userContext"
import MainDetailsCard from "../components/MainDetailsCard"
import InterestedCard from "../components/InterestedCard"
import services from "../assets/services.json"
import { getCars } from "../services/car"
import { getRequests } from "../services/serviceReq"
const Dashboard = () => {
  const { user } = useContext(userContext)

  const [requestIds, setRequestIds] = useState([])

  // my sample cars
  const [cars, setCars] = useState([])

  // my sample submitted requests
  const [submittedRequests, setSubmittedRequests] = useState([])
  const [interestedRequests, setInterestedRequests] = useState([])

  useEffect(() => {
    const getmycarsAndIntrests = async () => {
      let mycars = await getCars()
      setCars(mycars)
      let myInterests = await getRequests()
      setSubmittedRequests(myInterests)
    }
    getmycarsAndIntrests()
  }, [])

  const handleInterest = (newInterest) => {
    setInterestedRequests((interests) => [...interests, newInterest])
    setRequestIds((ids) => [...ids, newInterest.id])
  }
  let title = user?.name
  let leftPanel = user?.role === "Garage Owner" ? "Service Requests" : "My Cars"
  let rightPanel =
    user?.role === "Garage Owner" ? "My Interests" : "Sent Requests"

  return (
    <div className="dashboard">
      <h1>{title} Dashboard</h1>
      <div className="dashboard-panels">
        <div className="left-panel">
          <h2>{leftPanel}</h2>
          <MainDetailsCard
            items={user?.role === "Car Owner" ? cars : submittedRequests}
            role={user?.role}
            onSubmitRequest={
              user?.role === "Car Owner"
                ? (newRequest) =>
                    setSubmittedRequests((requests) => [
                      ...requests,
                      newRequest,
                    ])
                : handleInterest
            }
            requestIds={requestIds}
          />
        </div>

        <div className="right-panel">
          <h2>{rightPanel}</h2>
          <InterestedCard
            items={
              user?.role === "Car Owner"
                ? submittedRequests
                : interestedRequests
            }
            role={user?.role}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
