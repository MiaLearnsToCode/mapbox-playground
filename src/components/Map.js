import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import axios from 'axios'
import 'mapbox-gl/dist/mapbox-gl.css'

const token = process.env.MAPBOX_ACCESS_TOKEN

import Points from './game/Points'
import Coffeebar from './game/Coffeebar'
import Parkbar from './game/Parkbar'

class Map extends React.Component {
  constructor() {
    super()
    this.state = {
      viewport: {
        width: '100vw',
        height: '100vh',
        latitude: 51.515268,
        longitude: -0.142015,
        zoom: 20
      }, 
      layer: '',
      moves: 0,
      touristPoints: 0,

      firstBarHeight: 300,
      secondBarHeight: 300
    }  
  }
  
  getLayerData() {
    const moves = this.state.moves + 1
    this.setState({ moves })

    if (this.state.firstBarHeight > 0 && this.state.secondBarHeight > 0 && moves % 300 === 0) {
      axios.get(`https://api.mapbox.com/v4/mapbox.mapbox-streets-v8/tilequery/${this.state.viewport.longitude},${this.state.viewport.latitude}.json?radius=100&layers=poi_label&access_token=${token}`)
        .then(res => {
          const lastLayer = res.data.features[0]
          const firstBarHeight = this.state.firstBarHeight - 5
          const secondBarHeight = this.state.secondBarHeight - 5
          this.setState({ layer: lastLayer.properties.type, firstBarHeight, secondBarHeight })
        })
        .catch(() => this.setState({ layer: '' }))
    } else if (this.state.firstBarHeight === 0 && this.state.secondBarHeight === 0) {
      this.props.history.push('/end')
    }
  }

  componentDidMount() {
    this.getLayerData()
  }

  giphy() {
    const { firstBarHeight, secondBarHeight } = this.state
    if (firstBarHeight > 150 && secondBarHeight > 150) {
      return '../assets/happy.gif'
    } else if (this.state.firstBarHeight <= 150 && secondBarHeight > 150) {
      return '../assets/coffee.gif'
    } else if (secondBarHeight <= 150 && firstBarHeight > 150) {
      return '../assets/park.gif'
    } else {
      return '../assets/dead.gif'
    }
  }

  checkForPoint() {
    const attractions = ['Attraction', 'Museum', 'Memorial', 'Gallery', 'Castle']
    const parks = ['Park','Playground','Garden']
    const firstBarHeight = this.state.firstBarHeight + 10
    const secondBarHeight = this.state.secondBarHeight + 10
    const touristPoints = this.state.touristPoints + 1

    // coffee bar
    if (this.state.layer === 'Cafe' && firstBarHeight < 295) {
      this.setState({ firstBarHeight })
    } 

    // park bar
    if (parks.includes(this.state.layer) && secondBarHeight < 295) {
      this.setState({ secondBarHeight })
    } 

    if (attractions.includes(this.state.layer)) this.setState({ touristPoints })
    
  }


  changeViewport(viewport) {
    this.setState({ viewport })
    this.getLayerData()
    this.checkForPoint()
    this.setState({ layer: '' })
  }


  render() {
    return (
      <div>
        <ReactMapGL 
          {...this.state.viewport}
          onViewportChange={(viewport) => this.changeViewport(viewport)}
          mapboxApiAccessToken={token} 
          mapStyle='mapbox://styles/miameroi/ck1jh3yp81bj41cmj37nj7w23'
        >

          <Coffeebar firstBarHeight={this.state.firstBarHeight} />
          <Points touristPoints={this.state.touristPoints} />
          <Parkbar secondBarHeight={this.state.secondBarHeight} />

          <Marker latitude={this.state.viewport.latitude} longitude={this.state.viewport.longitude} >
            <img src={this.giphy()} className="marker"/>
          </Marker> 

        </ReactMapGL >
      </div>
    )
  }
}

export default Map