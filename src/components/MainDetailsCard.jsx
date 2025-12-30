import { useEffect, useState } from "react"

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
          onSubmitRequest={onSubmitRequest}
        />
      ))}
    </div>
  )
}

export default MainDetailsCard
