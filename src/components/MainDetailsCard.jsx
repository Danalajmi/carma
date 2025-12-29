import { useEffect, useState } from "react"
import ServiceRequestForm from "./ServiceRequestForm"

const MainDetailsCard = ({ items, onSubmitRequest, requestIds,submittedRequests, setSubmittedRequests }) => {
  const [expandedId, setExpandedId] = useState(null)


  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="left-panel">
      {items.map((item) => (
        <ItemCard item={item} submittedRequests= {submittedRequests}
            setSubmittedRequests={setSubmittedRequests}/>
      ))}
    </div>
  )
}

export default MainDetailsCard
