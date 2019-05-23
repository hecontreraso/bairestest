import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import Article from "./components/Article";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(({ data }) => {
        let albumIds = data.map(val => val.albumId);
        const uniqueSet = new Set(albumIds);
        albumIds = [...uniqueSet];
        const latestAlbumIds = albumIds.slice(-3);
        let photosInLatestAlbums = [];
        latestAlbumIds.forEach(id => {
          let albumPhotos = data.filter(value => id === value.albumId);
          photosInLatestAlbums = photosInLatestAlbums.concat(
            albumPhotos.slice(-2)
          );
        });
        setArticles(photosInLatestAlbums);
      });
  }, []);

  console.log("articles", articles);

  return (
    <div className="App">
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
}

export default App;
