import { useSelector } from "react-redux";
import MovieList from "./MovieList"


const SecondaryContainer = () => {

  const moviesList = useSelector(store=>store.movies)
  if (!moviesList) return
  const nowPlayingMovies = moviesList.playingMovies
  const popularMovies = moviesList.popularMovies
  const topRatedMovies = moviesList.topRatedMovies
  const upcomingMovies = moviesList.upcomingMovies

  return (
    <div className="bg-black">
    <div className="-mt-64 realtive z-30">
      <MovieList title={"Now Playing Movies"} movies={nowPlayingMovies}/>
      <MovieList title={"Top Rated Movies"} movies={topRatedMovies}/>
      <MovieList title={"Popular Movies"} movies={popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={upcomingMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer