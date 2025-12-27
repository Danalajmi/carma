const MainDetailsCard = ({ items, role, onSubmitRequest }) => {
  const handleAddRequest = () => {
    const newRequest = {
      id: Date.now(),
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
        </div>
      ))}

      {role === "Car Owner" ? (
        <button onClick={handleAddRequest}>Submit Request</button>
      ) : (
        <button>Show Interest</button>
      )}
    </div>
  )
}

export default MainDetailsCard
