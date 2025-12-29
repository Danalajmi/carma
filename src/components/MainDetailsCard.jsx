import { useEffect, useState } from "react"
import ServiceRequestForm from "./ServiceRequestForm"
import ItemCard from "./ItemCard"
const MainDetailsCard = ({ items, submittedRequests, setSubmittedRequests }) => {

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
