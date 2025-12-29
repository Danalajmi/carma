import { useEffect, useState,useContext } from "react"
import UserContext from "../context/userContext"

const InterestedCard = ({ items }) => {
const { user } = useContext(UserContext)
  const role = user?.role
  const [expandedId, setExpandedId] = useState(null)
  const [garageExpand, setGarageExpand] = useState(false)
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }
  let reveresedItems = items.toReversed()

  return (
    <div className="right-panel">
      <h4>Total Requests: {items.length}</h4>

      {reveresedItems.map((item) => (
        <div key={item.id} className="right-card">
          <h3>
            {item.car?.carBrand} | {item.car?.model}
          </h3>
          <p>
            Request for: <strong>{item.car?.carBrand}</strong>
          </p>

          <button onClick={() => toggleExpand(item.id)}>
            {expandedId === item.id ? "Hide Details" : "View Details"}
          </button>
          {expandedId === item.id && (
            <div className="request-details">
              {/* fix spacing issues here */}
              <p>Services Required: {item.service}</p>
              <p>Description: {item.description}</p>
            </div>
          )}

          {role === "Car Owner" && <button onClick={() => {setGarageExpand(!garageExpand) }}>View Interested Garages</button> }
        </div>
      ))}
    </div>
  )
}

export default InterestedCard
