import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const movies = [
    {
     id:1,
    title: "Mowgli",
    description: "L'histoire d'un garçon élevé par des loups dans la jungle qui lutte pour trouver sa place entre le monde des humains et celui des animaux.",
    posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSGQIDh_tCwmKWruRazmYtellC_sLnL9_Csg&s", // image de "Mowgli: Legend of the Jungle"
    rating: 4.2,
    trailer:  "https://www.youtube.com/embed/qQ0hGpTPXDc"
  },
  {
    id: 2,
    title: "Harry Potter",
    description: "Le jeune sorcier découvre Poudlard.",
    posterURL: "https://image.tmdb.org/t/p/w500/1.jpg",
    rating: 4.8,
    trailer: "https://www.youtube.com/embed/VyHV0BRtdxo"
  }
];

const MovieDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Film introuvable</h2>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br /><br />
      <button onClick={() => navigate("/")}>Retour à la liste</button>
    </div>
  );
};

export default MovieDescription;
