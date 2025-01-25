

import { useSelector } from "react-redux"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import GptPage from "./GptPage"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"


const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  const gptState = useSelector(store => store.gpt.gptPageState)

  return (
    <div>
      <Header />
      {gptState ? 
      <GptPage /> :
      <div>
        <MainContainer />
        <SecondaryContainer />
      </div>

      }

    </div>
  )
}

export default Browse