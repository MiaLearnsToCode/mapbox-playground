import React from 'react'
import { Link } from 'react-router-dom'

const Rotation = () => (
  <section className="hero is-fullheight navigation">
    <div className="tile is-ancestor">
      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child box">
          <p className="title">Rotate</p>
          <p className="emoji-nav">⬅️ ➡️</p>
          
        </div>
        <div className="tile is-child box">
          <p className="title">Angle</p>
          <p className="emoji-nav">⬆️ ⬇️</p>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child box">
          <p className="title">Rotation</p>
          <p>If you hold cmd + arrow you can rotate or change the angle view in the game.</p>
          <p>With the left and right arrows you can rotate</p>
          <p>With the up and down arrows you can change the angle view</p>
          <Link className="button" to="/navigation">back</Link>
          <Link className="button" to="/characters">next</Link>
        </div>
      </div>
    </div>
  </section>
)

export default Rotation