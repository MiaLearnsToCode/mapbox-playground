import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'

import './style.scss'


import End from './components/game/End'
import Map from './components/Map'
import Characters from './components/instructions/Characters'
import Navigation from './components/instructions/Navigation'
import Rotation from './components/instructions/Rotation'
import Welcome from './components/instructions/Welcome'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/end' component={End} />
          <Route path='/game' component={Map} />
          <Route path='/characters' component={Characters} />
          <Route path='/navigation' component={Navigation} />
          <Route path='/rotation' component={Rotation} />
          <Route exact path='/' component={Welcome}/>
        </Switch>
      </BrowserRouter>
      
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)