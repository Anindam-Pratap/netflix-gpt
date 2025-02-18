import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"


const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const playingMovies = useSelector(store=>store.movies.playingMovies)
    const nowPlayinMoviesList = async () => {
      
        const data =  await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
        
    }
  
    useEffect(()=>{
      !playingMovies && nowPlayinMoviesList()
    },[])
}

export default useNowPlayingMovies

