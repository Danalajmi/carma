const MainDetailsCard = ({ items, role, onSubmitRequest }) => {

  const handleAddRequest = () => {
    const newRequest = {
      id: Date.now(),
      carBrand: "BMW",
      service: "hvac",
      description: "This is a placeholder for the description. This will hold details about the cars problems."
    }
    onSubmitRequest(newRequest)
  }

  return (
    <div className="left-panel">
      {items.map((item) => (
        <div key={item.id} className="left-card">
          <h3>{item.carBrand}</h3>
          <h4>{item.service}</h4>
          <p>{item.description}</p>

          <button
            onClick={() =>
              role === "Car Owner" ? handleAddRequest() : onSubmitRequest(item)}>
                {role === "Car Owner" ? "Submit Request" : "Show Interest"}
              </button>
        </div>
      ))}

    </div>
  )
}

export default MainDetailsCard
