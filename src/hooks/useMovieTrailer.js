import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addMovieTrailer } from "../utils/movieSlice"
import { useEffect } from "react"

const useMovieTrailer = (movieID) => {

const dispatch = useDispatch()
  const trailerLink = useSelector(store => store.movies?.movieTrailer?.key)

  const playMovieTrailer = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`, API_OPTIONS)
    const json = await data.json()
    const filteredData = json.results.filter(video => video.type === "Trailer")
    const trailer = filteredData ? filteredData[0] : json.results[0]
    dispatch(addMovieTrailer(trailer))
  }

  useEffect(() => {
    playMovieTrailer()
  }, [movieID]) // Add movieID as a dependency to refetch on change

  return trailerLink
}

export default useMovieTrailer