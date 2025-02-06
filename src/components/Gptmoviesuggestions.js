import { useSelector } from "react-redux"
import Recommendcard from "./Recommendcard"
import Shimmer from "./Shimmer"


const Gptmoviesuggestions = () => {
  const recommendedMovies = useSelector(store=>store.movies.recommendedMovies)
  if (!recommendedMovies)return null
  return (
    <div className="flex flex-wrap justify-center">
    {/* If movies are still loading, show shimmer placeholders */}
    {!recommendedMovies
      ? Array(5) // Adjust number of shimmer cards as needed
          .fill("")
          .map((_, index) => <Shimmer key={index} />)
      : recommendedMovies.map((recommended) => (
          <Recommendcard
            key={recommended.results[0]?.id}
            image={recommended.results[0]?.poster_path}
            title={recommended.results[0]?.title}
            overview={recommended.results[0]?.overview}
            rating={recommended.results[0]?.vote_average}
            language={recommended.results[0]?.original_language}
          />
        ))}
  </div>
    
  )

}

export default Gptmoviesuggestions