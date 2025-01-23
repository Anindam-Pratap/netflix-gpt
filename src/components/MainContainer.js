import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"


const MainContainer = () => {

    const moviesList = useSelector(store=>store.movies?.playingMovies)
    if (!moviesList) return
    const movieIndex = Math.floor(Math.random() * 20)
    const mainMovie = moviesList[movieIndex]
    const {title,overview,id} = mainMovie
    
    
  return (
    <div className="z-20">
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground movieID={id} />

    </div>
  )
}

export default MainContainer