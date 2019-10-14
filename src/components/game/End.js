import React from 'react'
import { Link } from 'react-router-dom'

const End = () => (
  <section className="hero is-fullheight navigation">
    <div className="tile is-ancestor">
      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child box">
          <p className="">Have you checked out my portfolio?</p>
          <a className="button">Portfolio</a>

        </div>
        <div className="tile is-child box">
          <p className="">Have you checked out my GitHub?</p>
          <a className="button">GitHub</a>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child box">
          <p className="title">End of the game :(</p>
          <p>Unfortunately your character ran out of happiness and life points.</p>
          <article className="tile is-child notification flex">
            <figure className="image is-2by2">
              <img src="./../../assets/coffee.gif" />
            </figure>
          </article>
          <Link className="button" to="/game">start new game</Link>
        </div>
      </div>
    </div>
  </section>
)

export default End