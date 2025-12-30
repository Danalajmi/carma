import ServiceRequestForm from "./ServiceRequestForm"
import { useContext, useState } from "react"
import UserContext from "../context/userContext"
import { useNavigate } from "react-router-dom"

const ItemCard = ({ item }) => {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const role = user.role
  const [expandedId, setExpandedId] = useState(null)
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }
  const handleEdit = (carId) => {
    navigate(`/edit-car/${carId}`)
  }


  return (
    <div className="left-card">
      {role === "Car Owner" ? (
        <>
          <h3>
            {item.carBrand} | {item.model}
            <br></br>
            {item.year}
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

          <button
            onClick={() => handleEdit(item._id)}
            className="button-flex edit-car-btn"
          >
            Edit Car
          </button>

          {expandedId === item.id && (
            <ServiceRequestForm
              car={item.title}
              collapseForm={() => setExpandedId(null)}
            />
          )}
        </>
      ) : (
        <h1>hi</h1>

        // !requestIds.includes(item?._id) && ( //if item id exists, then button won't render
        //   <button onClick={() => onSubmitRequest(item)}>Show Interest</button>
        // )
      )}
    </div>
  )
}
export default ItemCard
