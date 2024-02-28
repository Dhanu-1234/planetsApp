import './index.css'

const PlanetItem = props => {
  const {planet} = props
  const {name, imageUrl, description} = planet

  return (
    <div className="planet-container">
      <div className="planet-img-container">
        <img
          src={imageUrl}
          alt={`planet ${name}`}
          className="planet-img-styles"
        />
      </div>
      <h1 className="planet-name">{name}</h1>
      <div className="description-container">
        <p className="planet-description">{description}</p>
      </div>
    </div>
  )
}

export default PlanetItem
