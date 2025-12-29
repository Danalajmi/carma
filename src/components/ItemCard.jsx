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

  return (
      <>
      <h1>HI dana</h1>
      </>
  )
}
export default ItemCard;

