import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ServiceRequestForm from "./ServiceRequestForm"
import ItemCard from "./ItemCard"

const MainDetailsCard = ({
  items,
  onSubmitRequest,
  requestIds,
  submittedRequests,
  setSubmittedRequests,
}) => {
  const [expandedId, setExpandedId] = useState(null)

  const handleEdit = (carTitle) => {
    navigate(`/edit-car/${carTitle}`)
  }

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
    const navigate = useNavigate()
  }

  return (
    <div className="left-panel">
      {items.map((item) => (
        <ItemCard
          item={item}
          submittedRequests={submittedRequests}
          setSubmittedRequests={setSubmittedRequests}
        />
      ))}
    </div>
  )
}

export default MainDetailsCard
