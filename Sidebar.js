import React from "react";

function Sidebar({ topAnime }) {
  return (
    <aside>
      <nav>
        {topAnime.map((anime) => (
          <a
            href={anime.url}
            target="_blank"
            key={anime.mal_id}
            rel="noreferrer"
          >
            <div>
              <img src={anime.image_url} alt="Anime Image" />
              {anime.synopsis}
            </div>
            {anime.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
