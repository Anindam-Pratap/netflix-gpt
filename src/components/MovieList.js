
import MovieCard from "./MovieCard"


const MovieList = ({title,movies}) => {
  
  if (!movies) return
  return (
    <div className="p-2 z-20">
      
      <h1 className="text-white text-lg font-bold relative px-4">{title}</h1>
      <div className="flex overflow-x-scroll  mx-2 px-2 no-scrollbar">
      <div className="flex z-20">
      {movies.map(movie => (<MovieCard key={movie.id} poster={movie.poster_path} />))}
      </div>
      </div>
    </div>
  )
}

export default MovieList