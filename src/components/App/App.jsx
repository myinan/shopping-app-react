import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://api.stockx.vlour.me/search?query=male adidas sneakers")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let sources = data.hits.map((d) => d.image);
        setImages(sources);
      });
  }, [setImages]); // Empty dependency array to fetch data only once

  let elements = null; // Declare elements variable outside the if block

  if (images) {
    elements = images.map((image, index) => {
      return <img key={index} src={image} alt="image" />;
    });
  }

  return <div>{elements}</div>;
}

export default App;
