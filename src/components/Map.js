import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import axios from 'axios'
import 'mapbox-gl/dist/mapbox-gl.css'

const token = process.env.MAPBOX_ACCESS_TOKEN

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

      barStyle: {
        position: 'absolute',
        left: 10,
        top: 20, 
        width: '15px',
        height: '150px',
        backgroundColor: '#fad0c4',
        backgroundImage: 'linear-gradient(315deg, #fad0c4 0%, #f1a7f1 74%)',
        borderRadius: '15px'
      },
      secondBarStyle: {
        position: 'absolute',
        right: 10,
        top: 20,
        width: '15px',
        height: '150px',
        backgroundColor: '#aff6cf',
        backgroundImage: 'linear-gradient(315deg, #aff6cf 0%, #9f98e8 74%)',
        borderRadius: '15px'
      },

      barBorder: {
        position: 'absolute',
        left: 5,
        top: 15,
        width: '25px',
        height: '160px',
        backgroundColor: 'transparent',
        border: '2px solid white',
        borderRadius: '15px'
      },

      secondBarBorder: {
        position: 'absolute',
        right: 5,
        top: 15,
        width: '25px',
        height: '160px',
        backgroundColor: 'transparent',
        border: '2px solid white',
        borderRadius: '15px'
      },

      coffeeStyle: {
        fontSize: '30px',
        position: 'absolute',
        left: 5,
        top: 180
      }, 
      parkStyle: {
        fontSize: '30px',
        position: 'absolute',
        right: 5,
        top: 180
      },
      pointsStyle: {
        position: 'absolute',
        margin: '0 auto',
        top: 15, 
        left: '50%'
      }

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
          <div style={this.state.barStyle}></div>
          <div style={this.state.barBorder}></div>
          <p style={this.state.coffeeStyle}>☕</p>
          
          <div style={this.state.pointsStyle}>
            <h1>🏛️: {this.state.touristPoints}</h1>
          </div>

          <div style={this.state.secondBarStyle}></div>
          <div style={this.state.secondBarBorder}></div>
          <p style={this.state.parkStyle}>🌳</p>

          
          <Marker latitude={this.state.viewport.latitude} longitude={this.state.viewport.longitude} >
            <img src='../assets/happy.gif' style={{ height: '100px',width: '140px', marginTop: '-40px', marginLeft: '-40px' }}/>
          </Marker> 
        </ReactMapGL >
      </div>
    )
  }
}

export default Map


// < iframe src = "https://giphy.com/embed/3ov9k9Y2tlz5HzILxm" style = {{ marginLeft: '-80px', marginTop: '-80px' }} width = "250" height = "250" frameBorder = "0" ></iframe >