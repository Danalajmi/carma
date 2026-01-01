import { useContext, useState, useEffect } from "react"
import userContext from "../context/userContext"
import MainDetailsCard from "../components/MainDetailsCard"
import InterestedCard from "../components/InterestedCard"
import services from "../assets/services.json"
import { getCars } from "../services/car"
import { getMyGarages } from "../services/garage"
import { getRequests, getMyReqs } from "../services/serviceReq"

const Dashboard = () => {
  const { user } = useContext(userContext)

  // explain this whole thing to me plz
  const [requestIds, setRequestIds] = useState([])

  const [cars, setCars] = useState([])
  const [garages, setGarages] = useState([])
  const [submittedRequests, setSubmittedRequests] = useState([])
  const [interestedRequests, setInterestedRequests] = useState([])
    const handleInterest = (newInterest) => {
    setInterestedRequests((interests) => [...interests, newInterest])
    setRequestIds((ids) => [...ids, newInterest.id])
  }


  useEffect(() => {
    if (!user?.role) return
    const getmycarsAndIntrests = async () => {
      let mycars = await getCars()
      setCars(mycars)
      if (user?.role === "Garage Owner") {
        let myGarages = await getMyGarages()
        setGarages(myGarages)

        let myInterests = await getRequests()

        console.log("here")
        let currentReqs = [...submittedRequests]
        myInterests.map((request) => {
          if (
            submittedRequests.some(
              (req) => req.id === submittedRequests.request._id
            )
          ) {
            return null

          }
          request.matchedGarages.map((garage) => {
            if (garage._id === garages[0]?._id) {
              setSubmittedRequests([...currentReqs, request.request])
            }
          })


        })
      } else if (user?.role === "Car Owner") {
        let myInterests = await getMyReqs()

        let serviceReq = myInterests.map((service) => service.request)

        setSubmittedRequests(serviceReq)
      }
    }
    getmycarsAndIntrests()

  }, [user, submittedRequests])

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
            submittedRequests={submittedRequests}
            setSubmittedRequests={setSubmittedRequests}
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
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
