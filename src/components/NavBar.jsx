import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
          Home
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixhome">
                netflixhome
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixshow">
                netflixshow
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixmovie">
                netflixmovie
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/teams">
                team
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/functiondemo">
                functiondemo
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo1">
                usestatedemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo2">
                usestatedemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo3">
                usestatedemo3
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
