import React from "react";
import { useParams, Link } from "react-router-dom";
import movies from "../data/movies";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Film non trouvé</h2>;

  return (
    <div className="p-4">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div className="mb-3">
        <iframe
          width="560"
          height="315"
          src={movie.trailer}
          title="Trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/" className="btn btn-secondary">Retour à la liste</Link>
    </div>
  );
};

export default MovieDetails;
