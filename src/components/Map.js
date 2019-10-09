import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {
  constructor() {
    super()
    this.state = {
      viewport: {
        width: '100vw',
        height: '100vh',
        latitude: 51.515513,
        longitude: -0.072372,
        zoom: 15
      }
    }

    this.dragEnd = this.dragEnd.bind(this)
  }

  changeViewport(viewport) {
    this.setState({ viewport })
  }

  dragEnd(event) {
    console.log(event.lngLat)
    const viewport = { ...this.state.viewport }
    viewport.latitude = event.lngLat[1]
    viewport.longitude = event.lngLat[0]
    this.setState({ viewport })
  }


  render() {
    console.log(this.state.viewport.latitude)
    return (
      <ReactMapGL 
        {...this.state.viewport}
        onViewportChange={(viewport) => this.changeViewport(viewport)}
        mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN} 
      >
        <Marker captureScroll={true} latitude={this.state.viewport.latitude} longitude={this.state.viewport.longitude} draggable={true} onDragEnd={this.dragEnd}>
          <p style={{ fontSize: '50px' }}>📍</p>
        </Marker> 
      </ReactMapGL >
    )
  }
}

export default Map