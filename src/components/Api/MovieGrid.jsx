import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export const MovieGrid = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=c47862d2&i=${id}`
      );
      setMovie(response.data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Movie Detail</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px"
        }}
      >
        <div
          style={{
            border: "1px solid black",
            padding: "20px",
            width: "400px",
            textAlign: "center"
          }}
        >
          <h3>{movie.Title}</h3>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Type:</strong> {movie.Type}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>

          <img
            src={movie.Poster}
            alt={movie.Title}
            height="200"
          />
        </div>
      </div>

      <br />

      <div style={{ textAlign: "center" }}>
        <Link to="/*">
          <button>BACK TO TABLE</button>
        </Link>
      </div>
    </div>
  );
};
