import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios, { Axios } from "axios"; // Import Axios
import Loading from "./Loading";

const cardStyle = {
  display: "flex",
  maxWidth: 400,
  margin: "1rem",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  overflow: "hidden",
};

const mediaStyle = {
  width: 150,
  height: "auto",
};

const contentStyle = {
  flex: "1 0 auto",
  padding: "1rem",
};

const MovieDetail = ({ selectedMovie }) => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://www.omdbapi.com/?i=${selectedMovie}&apikey=a568313b`;
        const response = await axios.get(url);
        const data = response.data;
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    fetchData();
  }, [selectedMovie]);
  return (
    <Card style={cardStyle}>
      {movie ? (
        <>
          <CardMedia component="img" src={movie.Poster} style={mediaStyle} />
          <CardContent style={contentStyle}>
            <Typography variant="h6" gutterBottom>
              {movie.Title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Release Year: {movie.Year}
            </Typography>
            <Typography variant="body2" paragraph>
              {movie.Plot}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Genre: {movie.Genre}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Director: {movie.Director}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Rating: {movie.imdbRating}
            </Typography>
            {/* Add more details as needed */}
          </CardContent>{" "}
        </>
      ) : (
        <Loading />
      )}
    </Card>
  ); // Render null if showMovieDetail is false
};

export default MovieDetail;
