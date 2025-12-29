import { useEffect, useState } from "react"

const InterestedCard = ({ items, role }) => {
  const [expandedId, setExpandedId] = useState(null)
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="right-panel">
      <h4>Total Requests: {items.length}</h4>
      {items.map((item) => (
        <div key={item.id} className="right-card">
          <h3>
            {item.car.carBrand} | {item.car.model}
          </h3>
          <p>
            Request for: <strong>{item.car.carBrand}</strong>
          </p>

          <button onClick={() => toggleExpand(item.id)}>
            {expandedId === item.id ? "Hide Details" : "View Details"}
          </button>
          {expandedId === item.id && (
            <div className="request-details">
              <p>Description: {item.description}</p>
            </div>
          )}

          {role === "Car Owner" && <button>View Interested Garages</button>}
        </div>
      ))}
    </div>
  )
}

export default InterestedCard
