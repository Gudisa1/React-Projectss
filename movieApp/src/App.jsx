import { useEffect, useState } from "react";
import { fetchDataAPI } from "./utils/fetchData";
import "./App.css";
import MovieList from "./components/MovieList";
import { Container } from "@material-ui/core";
import { createTheme } from "@mui/material/styles";

import axios from "axios";
import Search from "./components/Search";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (search.trim() === "") {
        // If the search query is empty, reset the movies list
        const url = `http://www.omdbapi.com/?apikey=a568313b&s=movie`;
        const response = await axios.get(url);
        const data = response.data;
        setMovies(data.Search);
        setIsLoading(false);
        return;
      }
      try {
        const url = `http://www.omdbapi.com/?apikey=a568313b&s=${search}`;

        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
        if (data && data.Search) {
          // If data.Search exists, it means there are movie results
          setMovies(data.Search);
        } else {
          // Handle cases where there are no movie results or an error occurred
          setMovies([]);
        }

        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search]);
  return (
    // <div className="container-fluid">
    //   <div className="row">
    //
    //   </div>
    // </div>
    <Container width="100%">
      <Search setMovies={setMovies} search={search} setSearch={setSearch} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <MovieList movies={movies} loading={loading} setMovies={setMovies} />
      </div>
    </Container>
  );
}

export default App;
