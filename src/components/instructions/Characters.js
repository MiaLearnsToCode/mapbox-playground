import React from 'react'
import { Link } from 'react-router-dom'

const Characters = () => (
  <section className="hero is-fullheight navigation">
    <div className="tile is-ancestor">
      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child box">
          <p className="title">Tired</p>
          <article className="tile is-child notification flex">
            <figure className="image is-2by2">
              <img src="./../../assets/coffee.gif" />
            </figure>
          </article>

        </div>
        <div className="tile is-child box">
          <p className="title">Unhappy</p>
          <article className="tile is-child notification flex">
            <figure className="image is-2by2">
              <img src="./../../assets/park.gif" />
            </figure>
          </article>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child box">
          <p className="title">Characters</p>
          <p>If your character does not drinks enough coffee it gets tired.</p>
          <p>If your character does visit a park for a long time it will be unhappy</p>
          <p>If your character runs out of energy and happiness, the game ends :(</p>
          <Link className="button" to="/rotation">back</Link>
          <Link className="button" to="/game">start new game</Link>
        </div>
      </div>
    </div>
  </section>
)

export default Characters