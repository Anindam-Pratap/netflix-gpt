import { useDispatch, useSelector } from "react-redux"
import lang from "../utils/languageConstants"
import { useRef } from "react"
import client from "./Groqai"
import { API_OPTIONS } from "../utils/constants"
import { addRecommendedMovies } from "../utils/movieSlice"



const GptSearchBar = () => {
  const languageKey = useSelector(store => store.configure.language)
  const searchText = useRef(null)
  const dispatch = useDispatch()
  
  const recommendedTmdbMovieSearch = async (title) =>{
    const movieData = await fetch('https://api.themoviedb.org/3/search/movie?query='+title+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json = await movieData.json()
    return json
  
  }
  const aiSearchMovie =async ()=>{
    const searchQuery = "Act as a movie recommendation system and suggest me movies for the query :" + searchText.current.value + ".only give me name of 5 movies comma seperated, like the example ahead, example movie 1,movie 2,movie 3,movie 4,movie 5. Your answer should be just 5 movies seperated by commas nothing else"
    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: 'user', content: searchQuery }],
      model: 'llama3-8b-8192',
    })
    console.log(chatCompletion.choices[0].message.content.split(","))
    const movieRecommendation = chatCompletion?.choices[0]?.message?.content?.split(",")
    const encodedTitle = movieRecommendation.map(movie=>movie.replace(/ /g, "%20"))
    const promiseArray = encodedTitle.map(title=>recommendedTmdbMovieSearch(title))
    const tmdbResults = await Promise.all(promiseArray)
    dispatch(addRecommendedMovies(tmdbResults))
    console.log(tmdbResults)
  }

  return (
    <div className="flex justify-center pt-[15%]">
        
        <form className="justify-center grid grid-cols-12 bg-black bg-opacity-70 rounded-xl" onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} className="p-2 col-span-9 m-2 rounded-lg" placeholder={lang[languageKey].searchInputPlaceholder}></input>
            <button  className="text-white bg-red-600 col-span-3 p-2 m-2 rounded-lg pr-10" onClick={aiSearchMovie}>{lang[languageKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar