import { MOVIE_POSTER_URL } from "../utils/constants"


const MovieCard = ({poster}) => {
  return (
    
    <div className="w-24 md:w-48 p-1">
       <img src={MOVIE_POSTER_URL + poster} alt="movie-card-logo" />
    </div>
  )
}

export default MovieCard