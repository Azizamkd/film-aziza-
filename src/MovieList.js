import React from "react";
import { Link } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "Avatar",
    description: "Un marine découvre un nouveau monde sur Pandora.",
    posterURL: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    rating: 4.5,
    trailer: "https://www.youtube.com/embed/RNj2cH5yjNA" 
  },
  {
    id: 2,
    title: "Mowgli",
    description: "Un garçon élevé par des loups lutte entre jungle et monde humain.",
    posterURL: "https://image.tmdb.org/t/p/w500/wcrjc1uwQaqoqtqi67Su4VCOYo0.jpg",
    rating: 4.2,
    trailer: "https://www.youtube.com/embed/Eujhx3-S8H8" 
  }
];

const MovieList = () => {
  return (
    <div>
      <h1>Liste des Films</h1>
      <div style ={{justifyContent:"center", display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ border: "1px solid gray", padding: "10px", width: "250px" }}>
            <h2>{movie.title}</h2>
            <img src={movie.posterURL} alt={movie.title} width="100%" />
            <p>⭐ {movie.rating}</p>
            <Link to={`/movie/${movie.id}`}>
              <button>Voir Détails</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
