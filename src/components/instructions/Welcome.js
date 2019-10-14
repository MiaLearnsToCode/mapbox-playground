import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => (
  <section className="hero is-fullheight">
    <div className="tile is-ancestor">
      <div className="tile is-vertical is-8">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification">
              <p className="title">A Happy Bee</p>
              <br />
              <p className="subtitle">Made with Mapbox</p>
            </article>
            <article className="tile is-child notification">
              <p className="title">made by Mia</p>
              <a className="subtitle">my Portfolio</a>
              <br />
              <a className="subtitle">my GitHub</a>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification flex">
              <figure className="image is-2by2">
                <img src="./../../assets/happy.gif"/>
              </figure>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification flex">
            <p className="title">Start a new Game</p>
            <Link to="/game" className="button">Play</Link>
          </article>
        </div>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification flex">
          <div className="content">
            <p className="title">Show me some instructions</p>
            <Link to="/navigation" className="button">Go</Link>
          </div>
        </article>
      </div>
    </div>
  </section>
)

export default Welcome