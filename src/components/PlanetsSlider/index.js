import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="content-container" data-testid="planets">
      <h1 className="main-heading">PLANETS</h1>
      <div className="slides-container">
        <Slider {...settings}>
          {planetsList.map(eachObj => (
            <PlanetItem key={eachObj.id} planet={eachObj} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
