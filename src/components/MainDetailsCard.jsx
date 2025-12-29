import { useEffect, useState } from "react"
import ServiceRequestForm from "./ServiceRequestForm"

const MainDetailsCard = ({ items, role, onSubmitRequest, requestIds }) => {

  const [expandedId, setExpandedId] = useState(null)
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="left-panel">
      {items.map((item) => (
        <div key={item.id} className="left-card">
          {role === "Car Owner" ? (
            <>
              <h3>
                {item.title} | {item.model}
              </h3>
            </>
          ) : (
            <>
              <h3>
                {item.car.title} | {item.car.model}
              </h3>
            </>
          )}
          {role === "Garage Owner" ? (
            <>
              <p>
                Request for: <strong>{item.car.carBrand}</strong>
              </p>
              <p>Description: {item.description}</p>
            </>
          ) : null}

          {role === "Car Owner" ? (
            <>
              <button onClick={() => toggleExpand(item.id)}>
                {expandedId === item.id ? "Close Form" : "Open Service Request"}
              </button>
              {expandedId === item.id && <ServiceRequestForm item={item.title} collapseForm={() => setExpandedId(null)} />} {/* added collapseForm function here and exported to ServiceRequestForm*/}

            </>
          ) : (
            !requestIds.includes(item.id) && ( //if item id exists, then button won't render
              <button onClick={() => onSubmitRequest(item)}>
                Show Interest
              </button>
            )
          )}
        </div>
      ))}
    </div>
  )
}

export default MainDetailsCard
