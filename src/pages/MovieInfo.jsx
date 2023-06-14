import React from "react";
import { useParams } from "react-router-dom";

const MovieInfo = ({ movie }) => {
  const { movieId } = useParams();

  return (
    <div className="movie__body">
      <div className="movie__container">
        <div className="row">
          <div className="movie__selected">
            <figure className="movie__selected--figure">
              <img
                src="https://covers.openlibrary.org/b/id/10425061-L.jpg"
                alt="Movie Image"
                class="movie__selected--img"
              ></img>
            </figure>
            <div className="movie__selected--description">
              <h2 className="movie__selected--title">Movie Selected Title</h2>
              <h3 className="movie__selected--year">Movie Selected Year</h3>
              <h3 className="movie__selected--runtime">
                Movie Selected Runtime
              </h3>
              <div className="movie__selected--plot">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                mollitia laboriosam non autem praesentium deleniti earum quae
                reprehenderit velit et maxime nesciunt, repellat optio veniam
                sint repellendus aperiam voluptatibus? Quis.
              </div>
              <h2 className="movie__selected--director">
                Movie Selected Director
              </h2>
              <h2 className="movie__selected--writer">Movie Selected Writer</h2>
              <h2 className="movie__selected--actor">Movie Selected Actor</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
