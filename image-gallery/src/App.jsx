import { useState, useEffect } from "react";
import "./App.css";
import ImageCard from "./components/ImageCard";
import Loading from "./components/Loading";
import SearchField from "./components/SearchField";
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const api = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${search}&image_type=photo&pretty=true`;

  useEffect(() => {
    const fetchImageData = async () => {
      const response = await fetch(api);
      const data = await response.json();
      setImages(data.hits);
      setIsLoading(false);
    };
    fetchImageData();
  }, [api]);

  return (
    <>
      <SearchField setSearch={setSearch} search={search} />
      <div className="container mx-auto">
        {isLoading && images.length === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32">
            No Images Found
          </h1>
        )}
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {images.map((image) => {
              return <ImageCard image={image} key={image.id} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
