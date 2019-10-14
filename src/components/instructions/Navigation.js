import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => (
  <section className="hero is-fullheight navigation">
    <div className="tile is-ancestor">
      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child box">
          <p className="title">Move</p>
          <p className="emoji-nav">⬅️ ➡️</p>
          <p className="emoji-nav">⬆️ ⬇️</p>
        </div>
        <div className="tile is-child box">
          <p className="title">Zoom</p>
          <p className="emoji-nav">🔍</p>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child box">
          <p className="title">Navigation </p>
          <p>Use the key board arrows to move around the map.</p>
          <p>Slide two fingers up or down to zoom, you have to be zoomed in in order to gain points </p>
          <Link className="button" to="/rotation">next</Link>
        </div>
      </div>
    </div>
  </section>
)

export default Navigation