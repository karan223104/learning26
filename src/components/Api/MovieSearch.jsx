import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const { register, handleSubmit } = useForm();
  const searchMovie = async (data) => {
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=61c2b3c1&s=${data.movieName}`,
    );
    setMovies(res.data.Search);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>movie search</h1>
      <form onSubmit={handleSubmit(searchMovie)}>
        <input
          type="text"
          placeholder="Enter movie name"
          {...register("movieName")}
        />
        <button type="submit">Search</button>
      </form>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {movies &&
          movies.map((movie) => {
            return (
              <div
                key={movie.imdbID}
                style={{
                  width: "250px",
                  border: "1px solid gray",
                  padding: "10px",
                }}
              >
                  <img
                    src={movie.Poster}
                    style={{ width: "100%", height: "350px" }}
                    alt={movie.Title}
                  />
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MovieSearch;
