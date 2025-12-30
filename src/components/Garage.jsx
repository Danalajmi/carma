import "../assets/style/garage.css"
const Garage = ({ garage }) => {
  let brands = garage.carBrands

  return (
    <article className="garage-card">
      <header className="garage-header">
        <h2 className="garage-name">{garage.name}</h2>
        <span className="garage-location">{garage.location}</span>
        <h5 className="garage-phone">Phone {garage.phone}</h5>

      </header>

      <p className="garage-description">{garage.description}</p>

      <section className="garage-brands">
        <h4>Supported Cars</h4>

        <div className="brand-list">
          {garage.carBrands?.map((brand) => (
            <span key={brand} className="brand-chip">
              {brand}
            </span>
          ))}
        </div>
      </section>
    </article>
  )
}

export default Garage
