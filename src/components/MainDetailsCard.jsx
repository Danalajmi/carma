import { useState } from "react"
import services from "../assets/services.json"
import Select from "react-select"

const serviceData = services

const MainDetailsCard = ({ items, role, onSubmitRequest, requestIds }) => {

  const [expandedId, setExpandedId] = useState(null)
  const [services, setServices] = useState([])
  const [description, setDescription] = useState("")

  const toggleExpand = (id) =>{
    setExpandedId(expandedId === id ? null : id)
  }


  const handleAddRequest = (item) => {
    const newRequest = {
      id: Date.now(),
      brand: item.brand,
      model: item.model,
      service: services.map (s => s.label).join(", "), // map objects to string
      description: description || "No description provided"
    }
    onSubmitRequest(newRequest)
    setServices([])
    setDescription("")
    // setExpandedId(null)
  }

  return (
    <div className="left-panel">
      {items.map((item) => (
        <div key={item.id} className="left-card">
          <h3>{item.brand} | {item.model}</h3>
          <p>Request for: <strong>{item.service}</strong></p>
          <p>Description: {item.description}</p>

          {role === "Car Owner" ? (
            <>
              <button onClick={() => toggleExpand(item.id)}>
                {expandedId === item.id ? "Close Form" : "Open Service Request"}
              </button>

              {expandedId === item.id && (
                <div className="service-request-form">
                  <h4>Service Request Form</h4>
                  <Select
                    options={serviceData}
                    closeMenuOnSelect={false}
                    isMulti
                    isSearchable={true}
                    value={services}
                    onChange={setServices}
                    placeholder="Select services"
                    className="dropdown"
                    />

                  <textarea
                    placeholder="Describe the problem"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <br></br>

                  <button
                    onClick={() => handleAddRequest(item)}
                    disabled={services.length === 0} //disables submit request button if no service is selected
                      >Submit Request</button>
                </div>
              )}
            </>
          ) : (
          !requestIds.includes(item.id) && ( //if item id exists, then button won't render
          <button onClick={() => onSubmitRequest(item)}>Show Interest</button>)
          )}
        </div>
      ))}
    </div>
  )
}

export default MainDetailsCard
