import React from 'react'

const Parkbar = ({ secondBarHeight }) => (
  <div>
    <div className="barStyle secondBarStyle" style={{ height: secondBarHeight }}></div>
    <div className="barBorder secondBarBorder"></div>
    <p className="emoji parkStyle">🌳</p>
  </div>
)

export default Parkbar