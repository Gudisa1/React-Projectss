import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios"; // Import Axios
import Loading from "./Loading";

const cardStyle = {
  display: "flex",
  maxWidth: 1200, // Increase the maximum width
  margin: "1rem auto", // Center the card horizontally
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
  borderRadius: "12px",
  overflow: "hidden",
};

const mediaStyle = {
  width: 250, // Increase the width of the movie poster
  height: "auto",
};

const contentStyle = {
  flex: "1 0 auto",
  padding: "1.5rem", // Add more padding
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
            <Typography variant="h5" gutterBottom>
              {movie.Title}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Release Year: {movie.Year}
            </Typography>
            <Typography variant="body1" paragraph>
              {movie.Plot}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Genre: {movie.Genre}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Director: {movie.Director}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Rating: {movie.imdbRating}
            </Typography>
            {/* Add more details as needed */}
          </CardContent>{" "}
        </>
      ) : (
        <Loading />
      )}
    </Card>
  );
};

export default MovieDetail;
