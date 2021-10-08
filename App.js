import { useState, useEffect } from "react";

import "./styles.css";
import Sidebar from "./Sidebar";

export default function App() {
  const [topAnime, setTopAnime] = useState([]);

  const getTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/airing`
    ).then((res) => res.json());

    setTopAnime(temp.top.slice(0, 10));
  };

  useEffect(() => {
    getTopAnime();
  }, []);

  return (
    <div className="App">
      <h1>Welcome To Top 10 Anime!</h1>
      <body>
        <div className="content-wrap">
          <Sidebar topAnime={topAnime} />
        </div>
      </body>
    </div>
  );
}
