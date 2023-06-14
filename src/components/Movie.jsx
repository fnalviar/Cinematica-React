import React, { useEffect, useState } from 'react';

const Movie = () => {
    const [movie, setMovie] = useState();

    
    
    return (
        <div className='movie'>
            <figure className="movie__img--wrapper">
                <img src="" alt="Movie Image" className="movie__img" />
            </figure>
            <div className="movie__title">
                
            </div>
        </div>
    );
}

export default Movie;
