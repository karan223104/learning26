import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export const OmdbSearch = () => {
    const [movie, setMovie] = useState([])
    const [searchParam, setsearchParam] = useState("Iron Man")
    const searchMovie = async() =>{
        const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=c47862d2&s=${searchParam}`)
        console.log(response);
        console.log(response.data);
        setMovie(response.data.Search);
    }
  return (
    <div>
        <h1>OmdbSearch</h1>
        <button onClick={() => {searchMovie()}}>GET</button>
        <table border="1" align="center" class="table">
        <thead class="thead-dark">
          <tr>
            <th>TITLE</th>
            <th>YEAR</th>
            <th>IMDBID</th>
            <th>TYPE</th>
            <th>POSTER</th>
          </tr>
        </thead>
        <tbody>
        {
            movie.map((table)=>{
                return <tr>
                            <td>{table.Title}</td>
                            <td>{table.Year}</td>
                            <td>{table.imdbID}</td>
                            <td>{table.Type}</td>
                            <img src={table.Poster} style={{height:"150px",width:"150px"}}></img>
                        </tr>
            })
        }
        </tbody>
        </table>
    </div>
  )
}