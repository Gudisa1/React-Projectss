import React, { useState } from "react";
import { Typography, Button } from "@material-ui/core";
import { createTheme } from "@mui/material/styles";
import Loading from "./Loading";

const MovieList = ({ movies, loading, onMovieSelect }) => {
  // const [showMovieDetail, setShowMovieDetail] = useState(false);
  // const [selectedMovieId, setSelectedMovieId] = useState(null);

  // const handleShow = (imdbID) => {
  //   setSelectedMovieId(imdbID);
  //   setShowMovieDetail(!showMovieDetail);
  // };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        movies.map((movie, index) => {
          return (
            <div
              style={{
                marginBottom: "16px",
                borderRadius: "8px", // Adjust the border radius as needed
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add a box shadow
              }}
              key={movie.imdbID}
            >
              <img
                src={movie.Poster}
                alt="movie"
                tyle={{ width: "150px", height: "225px" }}
              />
              <div style={{ marginLeft: "16px" }}>
                <Typography
                  variant="h6"
                  style={{
                    fontWeight: "bold",
                    marginBottom: "8px",
                    fontSize: "1.25rem",
                  }}
                >
                  {movie.Title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ marginBottom: "4px", fontSize: "1rem" }}
                >
                  Year: {movie.Year}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ marginBottom: "4px", fontSize: "1rem" }}
                >
                  {/* IMDb ID: {movie.imdbID} */}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ marginBottom: "4px", fontSize: "1rem" }}
                >
                  Type: {movie.Type}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "8px" }}
                  onClick={() => onMovieSelect(movie.imdbID)}
                >
                  Show Details
                </Button>
              </div>
            </div>
          );
        })
      )}
      {/* {showMovieDetail && selectedMovieId && (
        <MovieDetail selectedMovieId={selectedMovieId} /> // Pass the selected IMDb ID to MovieDetail
      )} */}
    </>
  );
};

export default MovieList;
