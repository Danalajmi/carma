import ServiceRequestForm from "./ServiceRequestForm"
import { useContext, useState } from "react"
import UserContext from "../context/userContext"

const ItemCard = ({ item }) => {
  const { user } = useContext(UserContext)
  const role = user.role
  const [expandedId, setExpandedId] = useState(null)
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }
let requestIds = [1,343557]
  return (
      <div className="left-card">
      {role === "Car Owner" ? (
        <>
          <h3>
            {item.title} | {item.model}
          </h3>
        </>
      ) : (
        <>
          <h3>
            {item.car.carBrand} | {item.car.model}
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


          {expandedId === item.id && <ServiceRequestForm car={item.title} collapseForm={() => setExpandedId(null)} />}
        </>
      ) : (
        <>
{!requestIds.includes(item?._id) && ( //if item id exists, then button won't render
  <button onClick={() => onSubmitRequest(item)}>Show Interest</button>
)}
        </>


      )}
    </div>
  )
}
export default ItemCard;

