import { useSelector } from "react-redux"
import lang from "../utils/languageConstants"



const GptSearchBar = () => {
  const languageKey = useSelector(store => store.configure.language)
  
  return (
    <div className="flex justify-center pt-[15%]">
        
        <form className="justify-center grid grid-cols-12 bg-black bg-opacity-70 rounded-xl">
            <input className="p-4 col-span-9 m-4 rounded-lg" placeholder={lang[languageKey].searchInputPlaceholder}></input>
            <button className="text-white bg-red-600 col-span-3 p-4 m-4 rounded-lg pr-10">{lang[languageKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar