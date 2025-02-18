

import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { addTopRatedMovies } from "../utils/movieSlice"


const useTopRatedMovies = () => {
    const dispatch = useDispatch()
    const topRatedMovies = useSelector(store=>store.movies.topRatedMovies)
    const topRatedMoviesList = async () => {
      
        const data =  await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
        const json = await data.json()
        console.log(json.results)
        dispatch(addTopRatedMovies(json.results))
        
    }
  
    useEffect(()=>{
      !topRatedMovies && topRatedMoviesList()
    },[])
}

export default useTopRatedMovies
