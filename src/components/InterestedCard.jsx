const InterestedCard = ({ items, role }) => {

  return (
    <div className="right-panel">
      <h4>Total Requests: {items.length}</h4>
      {items.map((item) => (
        <div key={item.id} className="right-card">
          {console.log(item.id)}
          <h3>{item.brand} | {item.model}</h3>
          <p>{item.service}</p>
          <p>{item.description}</p>
          {role === "Car Owner" ? (<button>View Interested Garages</button>) : (<button>View Request</button>)}
        </div>
      ))}
    </div>
  )
}

export default InterestedCard
