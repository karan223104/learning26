import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <Link className="nav-link" to="/netflixhome">
                netflixhome
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/netflixshow">
                netflixshow
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/netflixmovie">
                netflixmovie
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/teams">
                team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/functiondemo">
                functiondemo
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/usestatedemo1">
                usestatedemo1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/usestatedemo2">
                usestatedemo2
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/usestatedemo3">
                usestatedemo3
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/usestatedemo4">
                usestatedemo4
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/usestatedemo5">
                usestatedemo5
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/employee">
                employee
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/input">
                input
              </Link>
            </li> 
            {/* <li className="nav-item">
              <Link className="nav-link" to="/formdemo1">
                formdemo1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formdemo2">
                formdemo2
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formdemo3">
                formdemo3
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formdemo4">
                formdemo4             
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formdemo5">
                formdemo5             
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/apidemo1">
                apidemo1         
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/apidemo2">
                apidemo2        
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/omdbsearch">
               omdbsearch        
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/omdbsearch1">
               omdbsearch1        
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/moviesearch">
               moviesearch        
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formpost">
               formpost        
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
