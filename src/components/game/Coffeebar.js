import React from 'react'

const Coffeebar = ({ firstBarHeight }) => (
  <div>
    <div className="barStyle firstBarStyle" style={{ height: firstBarHeight }}></div>
    <div className="barBorder firstBarBorder"></div>
    <p className="emoji coffeeStyle">☕</p>
  </div>
)

export default Coffeebar