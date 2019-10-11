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
        latitude: 51.515513,
        longitude: -0.072372,
        zoom: 20
      }, 
      layer: '',
      moves: 0,
      coffeePoints: 0,
      touristPoints: 0,
      parkPoints: 0, 

      firstBarHeight: 150,
      secondBarHeight: 150
    }

  //  
  }
  
  getLayerData() {
    const moves = this.state.moves + 1
    this.setState({ moves })

    if (moves % 300 === 0) {
      axios.get(`https://api.mapbox.com/v4/mapbox.mapbox-streets-v8/tilequery/${this.state.viewport.longitude},${this.state.viewport.latitude}.json?radius=100&layers=poi_label&access_token=${token}`)
        .then(res => {
          console.log(res.data)
          const lastLayer = res.data.features[0]
          this.setState({ layer: lastLayer.properties.type })
        })
        .catch(() => this.setState({ layer: '' }))
    }
    
  }

  componentDidMount() {
    this.getLayerData()
  }

  checkForPoint() {
    const attractions = ['Attraction', 'Museum', 'Memorial', 'Gallery', 'Castle']
    const parks = ['Park','Playground','Garden']
    if (this.state.layer === 'Cafe') this.setState({ coffeePoints: this.state.coffeePoints + 1 })
    if (parks.includes(this.state.layer)) this.setState({ parkPoints: this.state.parkPoints + 1 })
    if (attractions.includes(this.state.layer)) this.setState({ touristPoints: this.state.touristPoints + 1 })
    
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
            <img src='../assets/happy.gif' className="marker"/>
          </Marker> 

        </ReactMapGL >
      </div>
    )
  }
}

export default Map