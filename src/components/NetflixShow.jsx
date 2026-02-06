import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShow = () => {
  return (
    <div>
        <h1>netflixshow</h1>
        <ul>
          <li>
            <Link to="/watch/moneyheist">Money Heist</Link>
          </li>
          <li>
            <Link to="/watch/dangal">Dangal</Link>
          </li>
          <li>
            <Link to="/watch/3idiots">3 idiots</Link>
          </li>
        </ul>
    </div>
  )
}
