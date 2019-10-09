import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import Map from './components/Map'

class App extends React.Component {
  render() {
    return (
      <Map />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)