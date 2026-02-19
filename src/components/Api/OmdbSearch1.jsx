import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const OmdbSearch1 = () => {
  const [movie, setMovie] = useState([]);
  const [searchParam, setSearchParam] = useState("Iron Man");

  const searchMovie = async () => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=c47862d2&s=${searchParam}`
    );
    setMovie(response.data.Search || []);
  };

  return (
    <div>
      <h1>Movie Table</h1>

      <button onClick={searchMovie}>GET</button>

      <table border="1" align="center">
        <thead>
          <tr>
            <th>TITLE</th>
            <th>YEAR</th>
            <th>TYPE</th>
            <th>POSTER</th>
            <th>DETAIL</th>
          </tr>
        </thead>

        <tbody>
          {movie.map((item) => (
            <tr key={item.imdbID}>
              <td>{item.Title}</td>
              <td>{item.Year}</td>
              <td>{item.Type}</td>
              <td>
                <img
                  src={item.Poster}
                  alt={item.Title}
                  height="100"
                />
              </td>
              <td>
                <Link to={`/grid/${item.imdbID}`}>
                  <button>DETAIL</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
